const express = require('express');
const sequelize = require('./config/db');
const app = express();
const path = require('path');
const port = 4050;
const { Candidates, Audit_log, Employees } = require('./models/initmodel');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('frontend'));

const emp_route = require('./routes/employeesroute');
app.use('/', emp_route);

const cand_route = require('./routes/candidateroute');
app.use('/', cand_route);

const protect = require('./routes/protectedroute');
app.use('/api', protect);

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

app.get('/employees', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend/HTML/employees.html'));
});

sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('DB synced successfully.');

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to sync DB:', err);
  });
