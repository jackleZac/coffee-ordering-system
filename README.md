# ☕ Café Ordering System

A full-stack web application for managing café orders, built with React (Vite) on the frontend and Node.js (Express) on the backend.

## 📦 Project Structure

```
project-root/
├── client/       # React + Vite frontend
├── server/       # Node.js backend
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v16 or higher)
- npm
- Express
- MongoDB
- Mongoose
- Tailwind CSS
---

## 🖥️ Frontend Setup (React + Vite)

1. Navigate to the frontend directory:
   ```bash
   cd client
   ```

2. Create a .env file with the following:
   ```
   REACT_APP_API_URL=http://localhost:3000
   CHOKIDAR_USEPOLLING=true
   SERVER_URL=http://localhost:8080
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Visit the app at:
   ```
   http://localhost:3000
   ```

---

## 🔙 Backend Setup (Node.js)

1. Navigate to the backend directory:
   ```bash
   cd server
   ```

   ⚠️ **MongoDB Setup Required**
   
   Before running the backend, make sure you have a MongoDB database ready:
   - You can create a free MongoDB Atlas cluster or use a local MongoDB instance.
   - Once created, copy your connection string and update the .env file in the server/ directory:

   ```
   DB=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
   ```

   Make sure the database name is cafe or adjust the mongoose.connect() call in index.js accordingly.

2. Create a .env file with following:
   ```
   PORT=3000
   DB=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
   DB_PASS={enter-your-DB-password}
   ACCESS_TOKEN_SECRET={enter-your-token-secret}
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node index.js
   ```
   Or if you have a script:
   ```bash
   npm run start
   ```

5. Backend will run at:
   ```
   http://localhost:3000
   ```

---

## 🔗 Connecting Frontend to Backend

Ensure your frontend API calls point to the backend URL (e.g. `http://localhost:3000`). 

```env
VITE_API_URL=http://localhost:3000
```

And in your frontend code:
```js
fetch(`${import.meta.env.VITE_API_URL}/orders`)
```

---

## 🧩 Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Other**: Axios, CORS, dotenv

---

## 📁 Folder Highlights

- `client/src/` — React components, pages, and assets
- `server/` — API routes, business logic, and server config

---

