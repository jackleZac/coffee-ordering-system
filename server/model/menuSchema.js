const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    imageKey: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const Menu = mongoose.model('Menu', productSchema);
module.exports = Menu;