<div align="center">

<br/>

# ☁️ Back It Up

**A cloud storage app with an aesthetic masonry grid UI — upload, organize, and access your files from anywhere.**

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com)
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co)

<br/>

[Features](#-features) · [Screenshots](#-screenshots) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [Roadmap](#-roadmap)

<br/>

</div>

---

## 🧠 What Is This?

**Back It Up** is a full-stack cloud storage web app where users can securely upload files and browse them through a clean, visual masonry grid layout — think of it as your personal cloud drive, but actually good-looking.

Built entirely from scratch using **Node.js + Express** on the backend, **MongoDB** for data persistence, and **Cloudinary** for scalable file storage — with JWT-based authentication, protected routes, and a smooth, aesthetic frontend served through EJS templates.

---

## ✨ Features

- 🔐 &nbsp; **JWT Authentication** — Stateless auth using signed tokens stored in cookies; passwords hashed with bcrypt
- ☁️ &nbsp; **Cloudinary File Storage** — Files uploaded via Multer and stored directly on Cloudinary's CDN
- 🖼️ &nbsp; **Masonry Grid UI** — Files displayed in a dynamic, aesthetic card-based grid layout
- 👁️ &nbsp; **In-Browser File Viewer** — View uploaded files without leaving the app
- 🛡️ &nbsp; **Protected Routes** — Auth middleware guards all private pages and API endpoints
- ✅ &nbsp; **Input Validation** — Server-side form validation using express-validator
- 🍪 &nbsp; **Cookie-based Sessions** — Seamless login persistence across page refreshes

---

## 📸 Screenshots

<div align="center">

### Landing Page
![Landing Page](/screenshots/landingPage.png)

### Register & Login
![Auth Pages](/screenshots/loginPage.png)

### Dashboard — Masonry File Grid
![Dashboard](/screenshots/dashboard.png)

</div>

---

## 🗂️ Project Structure

```
back-it-up/
│
├── config/
│   ├── db.js                   # MongoDB connection via Mongoose
│   ├── cloudinary.config.js    # Cloudinary SDK setup
│   └── multer.config.js        # Multer + Cloudinary storage engine
│
├── middlewares/
│   └── auth.js                 # JWT verification middleware
│
├── models/
│   ├── user.model.js           # User schema (name, email, hashed password)
│   └── files.model.js          # File schema (url, owner ref, metadata)
│
├── routes/
│   ├── index.routes.js         # Dashboard & file access routes
│   └── user.routes.js          # Register, login, logout routes
│
├── views/
│   ├── index.ejs               # Landing page
│   ├── home.ejs                # Main dashboard — masonry grid
│   ├── login.ejs               # Login page
│   └── register.ejs            # Register page
│
├── public/                     # Static assets (CSS, images)
├── app.js                      # App entry point
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **MongoDB** — local instance or [MongoDB Atlas](https://www.mongodb.com/atlas)
- **Cloudinary account** — [Sign up free](https://cloudinary.com/)

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/syed-ammar-ali/back-it-up.git
cd back-it-up
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the project root:

```env
PORT=3000

# MongoDB
MONGO_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**4. Start the development server**

```bash
npm start
```

Visit **http://localhost:3000** in your browser.

---

## 🔄 How It Works

```
User registers / logs in
        ↓
JWT token issued → stored in cookie
        ↓
User uploads a file via the dashboard
        ↓
Multer processes the file → streams to Cloudinary
        ↓
Cloudinary URL saved in MongoDB (linked to user)
        ↓
Dashboard fetches user's files → renders masonry grid
```

---

## 🛠️ Tech Stack

| Layer          | Technology                            |
|----------------|---------------------------------------|
| Runtime        | Node.js                               |
| Framework      | Express.js                            |
| Templating     | EJS                                   |
| Database       | MongoDB + Mongoose                    |
| Authentication | JSON Web Tokens (JWT) + bcrypt        |
| File Uploads   | Multer + Cloudinary SDK               |
| Validation     | express-validator                     |
| Sessions       | cookie-parser                         |

---

## 🚧 Roadmap

- [x] User authentication (register, login, logout)
- [x] File upload to Cloudinary
- [x] Masonry grid dashboard
- [ ] Delete and rename uploaded files
- [ ] Folder / album organization
- [ ] Drag-and-drop file upload
- [ ] Shareable public file links
- [ ] Responsive mobile layout

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.
Feel free to open an [issue](https://github.com/syed-ammar-ali/back-it-up/issues) or submit a pull request.

---

## 👤 Author

**Syed Ammar Ali**

[![GitHub](https://img.shields.io/badge/GitHub-@syed--ammar--ali-181717?style=for-the-badge&logo=github)](https://github.com/syed-ammar-ali)

---

## 📄 License

Distributed under the **ISC License**.

---

<div align="center">
  <br/>
  <sub>Built with Node.js, late nights, and a strong opinion about how file storage should look.</sub>
  <br/><br/>
</div>
