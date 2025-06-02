const Sequelize = require('sequelize');

const sequelize = new Sequelize('crm_task', 'postgres','kiot2003',{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;