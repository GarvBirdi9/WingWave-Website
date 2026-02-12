This repository contains the complete source code for the company website, including:

- ⚛️ Frontend (React + Vite + Tailwind CSS)
- 🚀 Backend (Express.js)
- 📊 Optional Excel storage for submissions

The project is structured for local development and production deployment.

---

# 📁 Project Structure
```
wingwave-website/
├── frontend/ # React + Vite frontend
├── backend/ # Express backend (API + email)
├── .gitignore
└── README.md
```


---

# 🧰 Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- Sonner (toast notifications)
- React Router

## Backend
- Express.js
- dotenv (environment variables)
- XLSX (optional Excel storage)

---

# ⚙️ Local Development Setup

Follow these steps to run the project locally for testing and development.

---

# 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sh1kharGupta/wingwave-website.git
cd wingwave-website
```
# 2️⃣ Frontend Setup
Navigate to frontend:
```
cd frontend
npm install
```
Start development server:
```
npm start
```
Frontend will run at:
```
http://localhost:3000
```

# 3️⃣ Backend Setup

Open a new terminal and navigate to backend:
```
cd backend
npm install
```

# ▶️ Start Backend
```
npm run dev
```

Backend will run at:
```
http://localhost:5000
```
# 🧪 Testing the Application

Start backend.

Start frontend.

Visit:
```
http://localhost:3000
```

Submit:

    Contact form

    Career application form

Expected behavior:

    Form submits successfully.

Formatted email is sent to configured receiver.

(Optional) Excel file is updated in backend/data/.
