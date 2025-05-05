// src/controllers/studentController.js
const db = require('../db');

exports.createStudent = async (req, res) => {
  const { first_name, last_name, email } = req.body;
  try {
    const [result] = await db.query(
      `INSERT INTO students (first_name, last_name, email) VALUES (?, ?, ?)`,
      [first_name, last_name, email]
    );
    res.status(201).json({ id: result.insertId, first_name, last_name, email });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getAllStudents = async (_, res) => {
  const [rows] = await db.query(`SELECT * FROM students`);
  res.json(rows);
};

exports.getStudentById = async (req, res) => {
  const [rows] = await db.query(
    `SELECT * FROM students WHERE id = ?`,
    [req.params.id]
  );
  if (!rows.length) return res.status(404).end();
  res.json(rows[0]);
};

exports.updateStudent = async (req, res) => {
  const { first_name, last_name, email } = req.body;
  await db.query(
    `UPDATE students SET first_name=?, last_name=?, email=? WHERE id=?`,
    [first_name, last_name, email, req.params.id]
  );
  res.json({ id: req.params.id, first_name, last_name, email });
};

exports.deleteStudent = async (req, res) => {
  await db.query(`DELETE FROM students WHERE id = ?`, [req.params.id]);
  res.status(204).end();
};
