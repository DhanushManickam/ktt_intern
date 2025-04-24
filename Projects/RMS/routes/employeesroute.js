const bcrypt = require('bcrypt');
const express = require('express');
const employees = require('../models/employee')

const emprouter = express.Router();

emprouter.post('/register', async (req, res) => {
    const { name, email_id, phone_no, role, department, password, confirmPassword } = req.body;
  
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const user = await employees.create({ name, email_id, phone_no, role, department, password: hashedPassword });
      res.status(201).json({ message: "User registered", user });
    } catch (err) {
      res.status(500).json({ error: "User not created", details: err });
    }
  });
  
  module.exports = emprouter;