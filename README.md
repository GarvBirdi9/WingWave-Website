# 🌐 Wingwave Technologies – Official Website

This repository contains the complete source code for the Wingwave Technologies website.

It includes:

- ⚛️ Frontend – React + Vite + Tailwind CSS
- 🚀 Backend – Express.js (API + Email Notifications)
- 📧 Automated Email Notifications for Contact & Career Forms

The project is structured for both local development and production deployment.

---

# 📁 Project Structure

wingwave-website/
├── frontend/ # React + Vite frontend
├── backend/ # Express backend (API + Email service)
├── .gitignore
└── README.md


---

# 🧰 Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Sonner (toast notifications)

## Backend
- Express.js
- Nodemailer (Email Integration)
- dotenv (Environment Variables)
- CORS

---

# ⚙️ Local Development Setup

Follow the steps below to run the project locally for testing and development.

---

## 1️⃣ Clone the Repository

```
git clone https://github.com/Sh1kharGupta/wingwave-website.git
cd wingwave-website
2️⃣ Frontend Setup
Navigate to the frontend directory:

cd frontend
npm install
```
Start the development server:
```
npm start
```
Frontend will run at:
```
http://localhost:3000
```
3️⃣ Backend Setup
Open a new terminal and navigate to the backend directory:
```
cd backend
npm install
```
🔐 Configure Environment Variables
Create a .env file inside the backend folder:
```
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_generated_app_password
RECEIVER_EMAIL=receiver_email@gmail.com
```
⚠️ Important: Do NOT commit the .env file to GitHub.

▶️ Start Backend Server
```
npm run dev
```
Backend will run at:
```
http://localhost:5000
```
🧪 Testing the Application

Start the backend server.

Start the frontend server.

Visit:
```
http://localhost:3000
```
Submit:

Contact form

Career application form

✅ Expected Behavior
Form submits successfully.

A formatted plain-text email notification is sent to the configured receiver.

No HTML formatting used (clean corporate text format).

📧 Email Notification System
When a user submits:

Contact Form
A structured plain-text email is sent to the configured receiver.

Includes inquiry type, contact details, and message.

Career Form
A structured plain-text email is sent.

Includes applicant details, resume link, and cover letter.

🔐 Security Notes
Environment variables are handled using dotenv.

Gmail App Password is required for email authentication.

.env is excluded via .gitignore.