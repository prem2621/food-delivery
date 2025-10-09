# 🚚 Tasty Truck — Modern MERN Food Delivery Application

**Welcome!** This repository contains a full-stack food delivery app built with the **MERN** stack (MongoDB, Express, React, Node.js). It includes two frontend apps (Client & Admin) and a backend server. The UI is styled with bold, modern CSS (teal + magenta + deep blacks) to give a trendy food truck vibe.

---

## 🔖 Quick Links / Deployment Status

| **Interface**                  | **Status**       | **URL**                                                                                                                  |
| ------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Client Frontend (User App)** | ✅ Deployed       | [https://food-delivery-clientss.onrender.com/](https://food-delivery-clientss.onrender.com/)                             |
| **Admin Frontend (Dashboard)** | ✅ Deployed    |  [https://food-delivery-admin-qwfe.onrender.com/](https://food-delivery-admin-qwfe.onrender.com/) |
| **Backend Server (API)**       | ✅ Deployed       | [https://food-delivery-server-2kj4.onrender.com](https://food-delivery-server-2kj4.onrender.com)                         |

 
---

## ✨ Project Overview

Tasty Truck is a responsive, fast, and visually pleasing food delivery application that supports:

* Browsing a menu with categories and filters
* Adding items to cart and managing cart
* Placing orders (checkout flow)
* Contact / booking form
* Admin dashboard for managing products, orders and content
* RESTful backend with authentication and file/image handling

This repo layout uses three top-level folders:

```
/ (repo root)
├─ client/     # Client (User-facing React app)
├─ admin/      # Admin (Dashboard React app)
└─ server/     # Backend (Node.js + Express + MongoDB)
```

---

## 🧩 Features & How They Work

### 🎨 Client (User App)

* **Hero / Home Section**: Attractive landing area (welcome, quick CTA). Uses a responsive hero component and CSS gradients/typography.
* **Menu / Products**: Fetches product data from the backend API (`GET /api/products`). Users can filter by category and search by name.
* **Product Cards**: Each item shows image, title, price and an Add-to-Cart button.
* **Cart & Checkout**: Cart is handled via app-wide context (`StoreContext`) and persisted in memory (optionally in localStorage). Checkout sends order data to backend (`POST /api/orders`).
* **Contact Form**: Sends messages/bookings to backend or triggers an email/service (configurable).
* **Responsive UI**: Mobile-first layout, CSS breakpoints, and accessible controls.

### 📊 Admin (Dashboard)

* **Product Management (CRUD)**: Create, edit, delete products and categories. Supports image uploads.
* **Order Management**: View, update order status, and toggle fulfillment.
* **Analytics / Stats**: Summary cards for total orders, revenue, active products (extendable).
* **Auth Protected**: Admin routes are protected using JWT tokens from the backend.

### 🚀 Backend (API)

* **Authentication**: JWT-based authentication for users/admins (`/api/auth`).
* **Products**: Endpoints for product list / details / create / update / delete.
* **Orders**: Create & retrieve orders, update order status.
* **File Uploads**: Images saved in the server `uploads/` or managed by Cloudinary (depending on how deployed).
* **Database**: MongoDB (Atlas or self-hosted) storing users, products, orders, categories.

---

## 🛠️ Tech Stack

* **Frontend**: React (client + admin), React Router, Axios, React Context (StoreContext), React Toastify
* **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt
* **Styling**: Modern CSS (custom styles, gradients, responsive layout)
* **Deployment**: Render (frontends and backend currently deployed to Render)

---

## 🚀 Run Locally — Step-by-step

> Make sure you have Node.js (v20+ recommended) and npm installed.

1. **Clone the repo**

```bash
git clone  (https://github.com/prem2621/food-delivery)
cd  (https://github.com/prem2621/food-delivery)
```

2. **Run the Backend (server)**

```bash
cd server
npm install
# create .env with the variables shown below
# start server
npm run dev            # or: npm start
```

**Example `server/.env`** (create this file):

```
PORT=4000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_here
 
```

3. **Run the Client (User app)**

```bash
cd ../client
npm install
npm run dev

```

4. **Run the Admin Dashboard**

```bash
cd ../admin
npm install
npm run dev
```

---

## ⚙️ Build & Deploy (quick notes)

**For each frontend** (client/admin):

```bash
cd client
npm run build
# upload build to your static host (Vercel, Netlify, Render static site, etc.)
```

**For server**: Deploy to Render/Heroku/Render Service. Make sure to set environment variables (MONGO_URI, JWT_SECRET, etc.) in the host dashboard.

**Render tips**:

* For client/admin, use static site deployment (build command `npm run build`, publish directory `build`).
* For server, set Start Command to: `npm start` (or use `npm run start:prod` depending on package.json)
* Add environment variables in Render web service settings.

---

## 📸 Screenshots

# 🔐 Signup : 
![SignUP screen](https://drive.google.com/uc?export=view&id=1wi3IFjqTuDFxu9BS7oRoFbnFiI342pr_)

# 🏠 Home : 
![Home screen](https://drive.google.com/uc?export=view&id=19u6BflciXMG5NQsNAhiXEzozfNdx1SoC)

# 🍔 Menu :
![Menu screen](https://drive.google.com/uc?export=view&id=15OE1krilzNV7S4PzFedA7a5cqNabI83L)

# 🍱 Menu Food :
![Menu Food](https://drive.google.com/uc?export=view&id=1SjcOSG-yuknAVejz9FxJZExlSN29bMv5)

# ℹ️ About : 
![About screen](https://drive.google.com/uc?export=view&id=14EAHcZP8xdAOJ68TyE8zuS7GUSBKaVVw)

# 🛒 Cart : 
![Cart screen](https://drive.google.com/uc?export=view&id=1eJNG5LmDjByZv5Ff67PPgNSlMocHLSji)

# 📍 Location : 
![Location screen](https://drive.google.com/uc?export=view&id=1O-jveYnn3SjFaFTaEFj46npuaPoCXkfh)

# 📞 Contact :
![Contact section](https://drive.google.com/uc?export=view&id=13y7_gofpWSk6GSUpaZ1Eg2_91j5_EI7a)

# ❤️ Footer :
![Footer / About](https://drive.google.com/uc?export=view&id=1iPfhu_7nI_KF298PO4jTYqKUV88Zg1FT)

---

# 🚀 Future Vision & Collaboration

One major feature I’m planning to implement in future sprints is **location-based smart interaction** between users and food trucks. 🌍✨  

### 🔮 Concept Overview
When a user signs up, they’ll provide their **name, email, password, and location**.  
This location data will be securely stored along with their user profile and cart details.  

### 📍 How It Works
- Once a food truck updates its live location,  
  nearby users will **automatically receive a notification** about its presence. 🚚📲  
- Users can also **manually change their location** or **share their current GPS position** using **Google Maps API**.  
- This helps users instantly know whether a food truck is **nearby or far away**, improving real-time engagement.  
- On the business side, it provides **valuable insights** into:
  - Which areas attract the most customers 🍔  
  - What locations drive better sales 📊  
  - How to plan **optimal routes** for food trucks 🔁  

### 💡 Impact
This feature bridges a real-world gap between **mobile food businesses** and **local customers**, using smart data and geolocation technology — empowering both sides.  

### 🤝 Collaboration
I’m open to collaborating with developers, data enthusiasts, or designers who are interested in building this idea further.  
Feel free to reach out! 💬  

- 💻 **GitHub:** [prem2621](https://github.com/prem2621)  
- 💼 **LinkedIn:** [Prem Kumar](https://www.linkedin.com/in/premkumar-frontenddeveloper/)  
- 📧 **Email:** premkumar200326@gmail.com  


---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add ..."`
4. Push and open a Pull Request

**Code style**: Keep components modular and CSS scoped. Use descriptive commit messages and small PRs for faster reviews.

---
 
## 📜 License
This project is open-source under the **MIT License**.  
Feel free to use, modify, and distribute with attribution.

---

## 📫 Contact

- 💻 **GitHub:** [prem2621](https://github.com/prem2621)  
- 📧 **Email:** premkumar200326@gmail.com  
- 🌐 **Portfolio:** [https://prem2621.github.io/webfolio/](https://prem2621.github.io/webfolio/)

---
