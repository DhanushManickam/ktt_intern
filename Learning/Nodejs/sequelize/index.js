const{sequelize, data} = require('./db');
const express = require("express");
const app = express();
const port = 4050;
const path = require("path");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"form.html"));
})

app.post('/create', async (req, res) => {
    const { name, email, age } = req.body;
    try {
      await data.create({ name, email, age });
      res.redirect('/users');
    } catch (err) {
      res.send(`Error: ${err.message}`);
    }
  });
  
  app.get('/users', async (req, res) => {
    const users = await data.findAll();
    let html = `<h2>All Users</h2><a href="/">+ Add New</a><ul>`;
    users.forEach(u => {
      html += `<li>${u.name} (${u.email}, ${u.age}) 
                <a href="/edit/${u.id}">Edit</a> 
                <a href="/delete/${u.id}" onclick="return confirm('Delete?')">🗑️ Delete</a>
              </li>`;
    });
    html += `</ul>`;
    res.send(html);
  });
  
  app.get('/edit/:id', async (req, res) => {
    const user = await data.findByPk(req.params.id);
    if (!user) return res.send('User not found');
    const form = `
      <h2>Edit User</h2>
      <form action="/update" method="POST">
        <input type="hidden" name="id" value="${user.id}" />
        <label>Name: <input type="text" name="name" value="${user.name}" required /></label><br><br>
        <label>Email: <input type="email" name="email" value="${user.email}" required /></label><br><br>
        <label>Age: <input type="number" name="age" value="${user.age}" required /></label><br><br>
        <button type="submit">Update</button>
      </form>
    `;
    res.send(form);
  });
  
  app.post('/update', async (req, res) => {
    const { id, name, email, age } = req.body;
    try {
      const user = await data.findByPk(id);
      if (!user) return res.send('User not found');
      await user.update({ name, email, age });
      res.redirect('/users');
    } catch (err) {
      res.send(`Error: ${err.message}`);
    }
  });
  
  app.get('/delete/:id', async (req, res) => {
    try {
      const user = await data.findByPk(req.params.id);
      if (!user) return res.send('User not found');
      await user.destroy();
      res.redirect('/users');
    } catch (err) {
      res.send(`Error: ${err.message}`);
    }
  });

app.listen(port,()=>{
    console.log("connection extrablished");
})