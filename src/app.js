// src/app.js
const express = require('express');
require('dotenv').config();

const studentRoutes    = require('./routes/students');
const courseRoutes     = require('./routes/courses');
const enrollmentRoutes = require('./routes/enrollments');

const app = express();
app.use(express.json());

app.use('/api/students',    studentRoutes);
app.use('/api/courses',     courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
