# ShoppyGlobe Backend API

## Project Overview

This project implements the backend APIs for the **ShoppyGlobe E-commerce application** using **Node.js, Express.js, and MongoDB**.
It provides APIs for product management, shopping cart operations, and user authentication using JWT.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Thunder Client (API Testing)

---

## Project Structure

```
shoppyglobe-api
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── productController.js
│   └── cartController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
│
├── routes
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── cartRoutes.js
│
├── .env
├── server.js
└── package.json
```

---

## Installation and Setup

### 1. Clone Repository

```
git clone https://github.com/YOUR_USERNAME/shoppyglobe-api.git
```

### 2. Navigate to Project

```
cd shoppyglobe-api
```

### 3. Install Dependencies

```
npm install
```

### 4. Setup Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shoppyglobe
JWT_SECRET=mysecretkey
```

### 5. Run Server

```
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

## API Endpoints

### Authentication

| Method | Endpoint      | Description                  |
| ------ | ------------- | ---------------------------- |
| POST   | /api/register | Register new user            |
| POST   | /api/login    | Login user and get JWT token |

---

### Products

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/products     | Get all products  |
| GET    | /api/products/:id | Get product by ID |

---

### Cart (Protected Routes)

| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| POST   | /api/cart     | Add product to cart      |
| PUT    | /api/cart/:id | Update cart quantity     |
| DELETE | /api/cart/:id | Remove product from cart |

---

## Authentication

Cart routes require **JWT token**.

Add header:

```
Authorization: TOKEN
```

---

## API Testing Screenshots
<img width="1396" height="749" alt="Screenshot 2026-03-10 155824" src="https://github.com/user-attachments/assets/75603572-1545-4f97-89c2-d77119daebc5" />
<img width="1395" height="786" alt="Screenshot 2026-03-10 115253" src="https://github.com/user-attachments/assets/644061f7-f7c1-4d8c-9e6f-38b3e4fcaa01" />
<img width="1402" height="703" alt="Screenshot 2026-03-10 115410" src="https://github.com/user-attachments/assets/3f988152-7ef1-44ed-9eb7-772efee2da6c" />
<img width="1395" height="565" alt="Screenshot 2026-03-10 115436" src="https://github.com/user-attachments/assets/d0721be7-ed14-4991-835f-5a34ab563cb2" />
<img width="1396" height="749" alt="Screenshot 2026-03-10 155824" src="https://github.com/user-attachments/assets/84e79046-0ac2-4aa8-9ec9-0c997fafd277" />





