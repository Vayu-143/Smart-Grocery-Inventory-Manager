# Smart Grocery Inventory Manager

A modern full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** application that helps users efficiently manage grocery inventory, track product expiry dates, monitor low-stock items, visualize inventory analytics, and export inventory data to Excel.

---

## Features

- JWT Authentication
- Secure Login & Registration
- Add Grocery Items
- Edit Grocery Items
- Delete Grocery Items
- Inventory Dashboard
- Low Stock Alerts
- Expiry Alerts
- Search Functionality
- Category Filtering
- Pie Chart Analytics
- Bar Chart Analytics
- Excel Export
- Responsive Dark Theme UI

---

## Tech Stack

### Frontend

- React.js
- Bootstrap 5
- Axios
- Recharts
- XLSX
- File Saver

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

### Database

- MongoDB Atlas

---

## Screenshots

### Dashboard

![Dashboard](./screenshots/dashboard.png)

### Login Page

![Login](./screenshots/login.png)

### Register Page

![Register](./screenshots/register.png)

### Add Item

![Add Item](./screenshots/add-item.png)

### Inventory Table

![Inventory Table](./screenshots/inventory-table.png)

---

## Project Structure

```text
Smart-Grocery-Inventory-Manager
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
├── screenshots
│   ├── dashboard.png
│   ├── login.png
│   ├── register.png
│   ├── add-item.png
│   └── inventory-table.png
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Vayu-143/Smart-Grocery-Inventory-Manager.git

cd Smart-Grocery-Inventory-Manager
```

### Backend Setup

```bash
cd server

npm install

npm start
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Dashboard Features

### Inventory Statistics

- Total Items
- Low Stock Count
- Categories Count

### Alerts

- Low Stock Monitoring
- Expiry Date Monitoring

### Analytics

- Category Distribution Pie Chart
- Inventory Quantity Bar Chart

### Inventory Management

- Add Items
- Update Items
- Delete Items
- Search Items
- Filter by Category

### Reports

- Export Inventory to Excel (.xlsx)

---

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Grocery Management

```http
GET    /api/grocery
POST   /api/grocery
PUT    /api/grocery/:id
DELETE /api/grocery/:id
```

---

## Learning Outcomes

This project demonstrates:

- REST API Development
- JWT Authentication
- MongoDB CRUD Operations
- React State Management
- Data Visualization using Recharts
- File Export Functionality
- Responsive UI Design
- Full-Stack MERN Development

---

## Future Enhancements

- PDF Export
- Email Expiry Reminders
- User Profile Management
- Pagination
- Sorting Features
- Advanced Analytics Dashboard
- Cloud Deployment

---

## Author

### Vayunandan Mishra

GitHub: https://github.com/Vayu-143

Repository: https://github.com/Vayu-143/Smart-Grocery-Inventory-Manager

---

⭐ If you found this project helpful, please consider giving it a star on GitHub.