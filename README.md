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


![Home screen](https://drive.google.com/file/d/19u6BflciXMG5NQsNAhiXEzozfNdx1SoC/view?usp=sharing)

![Contact section](https://drive.google.com/file/d/13y7_gofpWSk6GSUpaZ1Eg2_91j5_EI7a/view?usp=sharing)

![Footer / About](https://drive.google.com/file/d/1iPfhu_7nI_KF298PO4jTYqKUV88Zg1FT/view?usp=sharing)

---

**Short-term (next sprint)**

* Integrate payment gateway (Stripe / Razorpay) for real payments 💳
* Add order tracking (live status / estimated time) 🚚
* Persist cart to `localStorage` for returning users
* Improve admin UX: bulk upload, product import/export

**Medium-term**

* Add push notifications (for order updates)
* Add user profiles, order history, and address management
* Add search suggestions and better filters
* Add image optimizations and lazy-loading for performance

**Long-term / Nice-to-have**

* Mobile app wrappers (React Native / Expo)
* PWA support (offline, installable) 🧭
* CI/CD pipeline, unit & integration tests, E2E tests
* Analytics & real-time dashboard (Socket.io) 📊

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add ..."`
4. Push and open a Pull Request

**Code style**: Keep components modular and CSS scoped. Use descriptive commit messages and small PRs for faster reviews.

---

## 📜 License

This project is open-source. Add your license of choice (e.g., **MIT**) here.

---

## 📫 Contact

* Add your GitHub & email here for contributors/questions.

---
