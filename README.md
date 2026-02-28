🚀 Job Portal – MERN Stack Application

A full-stack Job Portal web application built using the MERN Stack (MongoDB, Express, React, Node.js) that connects job seekers with employers.

The platform enables secure authentication, role-based access control, job posting, and job applications in a real-world scalable architecture.

📌 Features
👤 Authentication & Authorization

Secure user registration & login

JWT-based authentication

Password hashing using bcrypt

Role-based access control (Employer / Job Seeker)

💼 Employer Features

Post new job listings

Edit job postings

Delete job postings

View applicants for a job

🧑‍💻 Job Seeker Features

Browse all available jobs

Search and filter jobs

Apply to jobs

View applied jobs history

🛠 Technical Features

RESTful API design

Protected routes using middleware

Error handling with try/catch blocks

MongoDB schema design with relationships

Clean frontend-backend integration using Axios

Responsive UI built with React

🏗️ Tech Stack
Frontend

React.js

React Hooks

Axios

CSS / Bootstrap (if used)

Backend

Node.js

Express.js

JWT (JSON Web Tokens)

bcrypt (Password hashing)

Database

MongoDB

Mongoose ODM

📂 Project Structure
job-portal/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── ...
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
└── README.md
🔐 Authentication Flow

User registers with email & password.

Password is hashed using bcrypt before storing in MongoDB.

On login, server verifies credentials.

Server generates JWT token.

Token is stored in client (localStorage).

Protected routes verify token using middleware.

This ensures secure and scalable authentication.

🗃️ Database Design
User Schema

name

email

password

role (employer / jobseeker)

Job Schema

title

company

location

salary

description

createdBy (Employer ID)

Application Schema

jobId

applicantId

resume (if implemented)

appliedAt

Relationships are handled using MongoDB ObjectIds for efficient querying.

📡 API Endpoints
Auth Routes

POST /api/auth/register

POST /api/auth/login

Job Routes

GET /api/jobs

POST /api/jobs

PUT /api/jobs/:id

DELETE /api/jobs/:id

Application Routes

POST /api/apply

GET /api/applications

⚡ How It Works

React frontend sends API requests using Axios.

Express handles routing and middleware.

MongoDB stores users, jobs, and applications.

JWT middleware protects private routes.

Role-based logic ensures correct access permissions.

🚀 How To Run Locally
1️⃣ Clone the Repository
git clone https://github.com/shreyaajahan/job-portal.git
cd job-portal
2️⃣ Setup Backend
cd backend
npm install
npm start
3️⃣ Setup Frontend
cd frontend
npm install
npm start

Make sure MongoDB is running locally or update your connection string.

💡 Future Improvements

Job recommendation system

Pagination for job listings

Email notifications for applications

🎯 Key Learnings

Implemented secure JWT authentication

Designed REST APIs

Managed role-based access

Structured scalable MongoDB schemas

Integrated frontend and backend efficiently

Debugged CORS and middleware issues

👩‍💻 Author

Shreyaa Jahan
Full Stack Developer (MERN)
GitHub: https://github.com/shreyaajahan
