const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (employee) =>{
    const payload = { id: employee.id, name: employee.username, email_id: employee.email_id,role : employee.role, department : employee.department };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRATION_TIME });
    return token;
}

function verifyToken(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');  

    if (!token) {
      return res.status(401).send('Access Denied. No token provided.');
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);  
      req.user = decoded;  
      next();
    } catch (err) {
      return res.status(400).send('Invalid or expired token.');
    }
  }
  
  module.exports = { generateToken, verifyToken };