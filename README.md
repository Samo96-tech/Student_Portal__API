# Student Portal API

A simple RESTful CRUD API for managing students, courses, and enrollments.

## Features

- Create, Read, Update, Delete students
- Create, Read, Update, Delete courses
- Enroll students in courses & manage enrollments

## Tech Stack

- Node.js + Express
- MySQL (via mysql2)
- dotenv for configuration

## Getting Started

1. Clone the repo  
2. `npm install`  
3. Create a `.env` file (see sample below)  
4. Run the SQL script: `mysql -u user -p < schema.sql`  
5. `npm start`  

## Setup & Configuration
1. Clone this repo

2. Install dependencies
npm install

3. Configure your MySQL creds in a .env file at project root:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_portal
PORT=3000

4. Run the server
node src/app.js
All endpoints will be available under http://localhost:3000/api/...

