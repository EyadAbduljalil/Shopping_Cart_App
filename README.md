تفضل، هذا هو ملف `README.md` كامل باللغة الإنجليزية، بنفس التنسيق الاحترافي:
# 🛒 Shopping Cart App

A full-stack shopping cart application built with **React + Vite** for the frontend and **Node.js + Express + MongoDB** for the backend.

[](https://reactjs.org/)
[](https://nodejs.org/)
[](https://www.mongodb.com/)
[](https://expressjs.com/)

-----

## ✨ Key Features

  - **🛍️ Full CRUD Functionality:** Create, Read, Update, and Delete items in the shopping cart.
  - **⚡ Blazing Fast Frontend:** Built with React and Vite for a rapid development experience with Hot Module Replacement (HMR).
  - **🔗 Robust API:** A stable backend API powered by Node.js and Express.
  - **💾 Persistent Storage:** Utilizes MongoDB with Mongoose for reliable data persistence.
  - **🤝 Seamless Integration:** Uses Axios for easy communication between the frontend and backend.
  - \*\* CORS Ready:\*\* Properly configured to allow cross-origin requests.

-----

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React, Vite |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **HTTP Client** | Axios |
| **Styling** | *(Add your styling tech, e.g., CSS, Tailwind)* |

-----

## 📋 Prerequisites

Before you begin, ensure you have the following tools installed on your system:

  - [Node.js](https://nodejs.org/en/) (v16 or later recommended)
  - [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
  - An account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance.

-----

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### 1\. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <PROJECT_DIRECTORY>
```

### 2\. Backend Setup

```bash
# Navigate to the backend directory
cd shopping-cart-backend

# Install dependencies
npm install

# Create a .env file in the backend's root directory
touch .env
```

Add the following environment variables to your `.env` file, replacing the values with your own.

```env
# File: shopping-cart-backend/.env
PORT=5001
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/shoppingCart
```

### 3\. Frontend Setup

```bash
# Navigate to the frontend directory from the root
cd ../shopping-cart-frontend

# Install dependencies
npm install

# Create a .env file in the frontend's root directory
touch .env
```

Add the following environment variable to your `.env` file.

```env
# File: shopping-cart-frontend/.env
VITE_API_URL=http://localhost:5001
```

> **Note:** This port must match the port your backend server is running on (in this case, `5001`).

-----

## ▶️ Running the Application

You will need two separate terminal windows to run both the frontend and backend servers simultaneously.

**Terminal 1: Start the Backend Server**

```bash
# From within the shopping-cart-backend directory
npm run dev
```

Your API server should now be running at `http://localhost:5001`.

**Terminal 2: Start the Frontend Dev Server**

```bash
# From within the shopping-cart-frontend directory
npm run dev
```

Your React application should now be accessible at `http://localhost:5173` (or another port specified by Vite).

-----

## 📁 Project Structure (Simplified)

```
.
├── shopping-cart-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
└── shopping-cart-frontend/
    ├── public/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── pages/
    │   └── App.jsx
    ├── .env
    └── vite.config.js
```

-----

## 📡 API Endpoints

The backend server provides the following API endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/items` | Fetches all items from the cart. |
| `POST` | `/api/items` | Adds a new item to the cart. |
| `PUT` | `/api/items/:id` | Updates an existing item in the cart by its ID. |
| `DELETE` | `/api/items/:id` | Deletes an item from the cart by its ID. |

-----

## 🖼️ Screenshots

*(Add screenshots of your application here)*

-----

## 🤝 Contributing

Contributions are welcome\! If you'd like to contribute, please fork the repository and create a pull request.

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

-----

## 📜 License

<img width="728" height="813" alt="لقطة شاشة 2025-10-20 002009" src="https://github.com/user-attachments/assets/a1b1e34d-40a7-4f85-97d1-3d6946fc54fa" />







## 👤 Author

**EyadAbduljalil**

  - **GitHub:** `(https://github.com/EyadAbduljalil)`
  - **LinkedIn:** `(https://www.linkedin.com/in/eyad-abduljalil-031689383/)`
