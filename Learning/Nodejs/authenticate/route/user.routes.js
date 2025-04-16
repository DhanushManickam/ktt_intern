const express = require('express');
const router = express.Router();
const userController = require('../control/user.controller');

router.post('/register', userController.createUser);
module.exports = router;