const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const employees = sequelize.define('employee',{
    id :{
        type: DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    name:{
        type : DataTypes.STRING(30),
        allowNull : false
    },
    email_id : {
        type : DataTypes.STRING(40),
        allowNull : false,
        validate : {
            isEmail : true
        },
        unique : true
    },
    phone_no : {
        type : DataTypes.INTEGER
    },
    role : {
        type : DataTypes.STRING(30),
        allowNull : false
    },
    department : {
        type : DataTypes.STRING(30),
    },
    password : {
        type: DataTypes.STRING(64),
        allowNull: false
    }
})
module.exports = employees