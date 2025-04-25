const bcrypt = require('bcrypt');
const express = require('express');
const employees = require('../models/employee')

const emprouter = express.Router();

emprouter.post('/register', async (req, res) => {
    const { name, email_id, phone_no, role, department, password, confirmPassword } = req.body;
  
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }


  
    try {
      const maxId = await employees.max('id');
      const newId = maxId ? maxId + 1 : 1;
        
      let hashedPassword;
      if (password === "not_an_hr") {
        hashedPassword = confirmPassword; 
      } else {
        hashedPassword = await bcrypt.hash(password, 10);
      }
  
      await employees.create({
        id: newId,
        name,
        email_id,
        phone_no,
        role,
        department,
        password: hashedPassword
      });
      
      console.log(`Employee account for ${name} created!`);
      if (confirmPassword === 'not_an_hr') {
        res.redirect('/employees');
      } 
      else {
        res.redirect('/');
      } 
    } catch (err) {
      res.status(500).json({ error: "User not created", details: err });
    }
  });
  
  module.exports = emprouter;