# 📒 Notes App

A simple Notes App built with **React (Vite)** for the frontend and **Node.js/Express** with **MongoDB** for the backend.

---

## 📂 Project Structure

/notes-app # Frontend (React + Vite)
/src
/public
package.json

/notes-backend # Backend (Node.js + Express)
.env # Environment variables (not included in repo)
package.json

---

## 🚀 How to Run the Project Locally

### 🖥️ Frontend

1. Navigate to the frontend directory:
   cd frontend
   cd notes-app

2. Install dependencies:
    npm install

3. Start the development server:
    npm run dev

The app will run on http://localhost:5173/login

🖥️ Backend
1. Navigate to the backend directory:
    cd backend

2. Install dependencies:
    npm install express mongoose jsonwebtoken dotenv cors nodemon

3. Create a .env file in the backend root and add your MongoDB connection string:
    MONGODB_URI=your-mongodb-connection-string

4. Start the backend server:
npm start

📌 Check the package.json scripts section to confirm your start script is correctly set up (e.g. using nodemon or node).

📦 Environment Variables
Create a .env file in your backend root directory with:
MONGODB_URI=your-mongodb-connection-string

📌 Technologies Used
React (Vite)
Node.js
Express
MongoDB
Mongoose
JSON Web Tokens (JWT)
dotenv
CORS
Nodemon

📄 License
This project is for learning and personal use.

🙌 Author
Achint Verma — https://github.com/Achintxv

---
