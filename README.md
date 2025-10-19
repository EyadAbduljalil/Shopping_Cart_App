# 🛒 Shopping Cart App

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

A full-stack shopping cart application built with **React + Vite** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## 📑 Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 🔗 Demo
- **Frontend GitHub:** [https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)  
- **Backend GitHub:** [https://github.com/xxxxx/backend](https://github.com/xxxxx/backend)  
> _Replace the above links when you publish your actual repositories._

---

## ⚡ Features
- Full CRUD functionality for cart items:
  - Create new cart items
  - Read (list) all cart items
  - Update existing items
  - Delete items
- Frontend communicates with Backend API using Axios
- MongoDB Atlas with Mongoose for database operations
- React + Vite setup with Hot Module Replacement (HMR) for fast development
- CORS enabled for frontend-backend integration

---

## 🛠 Tech Stack
- **Frontend:** React + Vite  
  - Plugins:
    - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) (uses Babel)
    - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (uses SWC)
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **HTTP Client:** Axios

---

## 💻 Installation

### 1️⃣ Backend
```bash
cd shopping-cart-backend
npm install
npm run dev

### 2️⃣ Frontend
cd shopping-cart-frontend
npm install
npm run dev


### 🌱 Environment Variables

Backend (shopping-cart-backend/.env)
PORT=5001
MONGO_URI=mongodb+srv://Eyad:*****@cluster0.x43nxe3.mongodb.net/shoppingCart

Frontend (shopping-cart-frontend/.env)
VITE_API_URL=http://localhost:5001

