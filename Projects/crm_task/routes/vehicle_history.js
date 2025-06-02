const express = require('express');
const vehicle_route = express.Router();
const {vehicle_data} = require('../controllers/vehicle_history')

vehicle_route.get('/api/vehicle',vehicle_data);

module.exports = vehicle_route; 