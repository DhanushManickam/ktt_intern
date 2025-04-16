const { User } = require('../models');

exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  res.json(user);
};