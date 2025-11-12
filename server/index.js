require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const bcyrpt = require('bcryptjs');
const { generateToken, validateToken } = require('./middleware/authMiddleware');

// Import model schemas
const Menu = require('./model/menuSchema');
const User = require('./model/userSchema');

// Middleware
app.use(express.json());
app.use(cors());

// Port Configuration
const port = process.env.PORT;

// Connect to MongoDB
mongoose.connect(process.env.DB, { dbName: 'cafe' })
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas')
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB Atlas', err)
        process.exit(1)
    })


// Define routes to handle menu
app.get('/menu', async (req, res) => {
    try {
        // Confirm connection
        console.log('Receiving GET request for /menu');
        // GET all available menu
        const items = await Menu.find({});
        res.status(200).send(items);
        console.log(items);
    } catch (error) {
        console.log({ message: error });
        res.status(500).send({ message: 'Internal Server Error' });
    }
})

app.get('/menu/:category', async (req, res) => {
    try {
        const targetedMenu = req.params.category;
        // Get a specific menu
        const items = await Menu.find({ category: targetedMenu}).exec();
        res.status(200).send(items)
        console.log(items)
    } catch (error) {
        console.log({ message: error });
        res.status(500).send({ message: 'Internal Server Error' });
    }
})

// Defines routes to handle authentication
app.post('/register', async (req, res) => {
    // Receive user details
    const { firstName, 
        lastName, username, 
        birthDate, email, 
        phone, password } = req.body;
    // Hash user password
    const hashpassword = await bcyrpt.hash(password, 10)
    // Insert user details in MongoDB
    const registerUser = new User({ 
        firstName: firstName,
        lastName: lastName,
        username: username, 
        birthDate: birthDate,
        email: email, 
        phone: phone,
        password: hashpassword })
    await registerUser.save();
    // Send status to client
    res.status(200).json({ message: "Registration Success!"})
    
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Check if user exists
    try {
        const user = await User.findOne({ username: username })
        if (!user) res.status(400).json({error: "User Not Found"})
        // Check password validity
        const match = await bcyrpt.compare(password, user.password)
        if (!match) {
            res.status(400).json({error: "Incorrect Password"})
        } else {
            const accessToken = generateToken(user)
            // Store accessToken in cookie
            res.cookie("access-token", accessToken, { maxAge: 60*60*1000, httpOnly: true, sameSite: 'None', secure: true});
            // Send status to client
            res.json({ message: "Logged In"})
        }
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
})

// Start Express Server
app.listen(port, () => {
    console.log(`Server listens on PORT ${port}`)
})

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    console.log('MongoDB connection closed through app termination')
    process.exit(0)
});