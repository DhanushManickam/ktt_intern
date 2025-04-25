const express = require('express');
const sequelize = require('./config/db');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 4050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('frontend'));

const emp_route = require('./routes/employeesroute');
app.use('/', emp_route);

const cand_route =require('./routes/candidateroute')
app.use('/', cand_route)

sequelize.sync()
  .then(() => {
    console.log('DB synced');
  })
  .catch(err => console.log('Error:', err));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './Frontend/HTML/login.html'));
});

app.get('/registerpage', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend/HTML/register.html'));
});

app.get('/candidate', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend/HTML/candidates.html'));
});

app.get('/add_candidate', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend/HTML/addcandidate.html'));
});
 
app.get('/edit_candidate', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend/HTML/editcandidate.html'));
});

app.get('/employees', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend/HTML/employees.html'));
});

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});
