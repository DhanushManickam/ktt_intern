const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize('mydb', 'postgres', 'kiot2003', {
    host: 'localhost',
    dialect: 'postgres',
  });

  async function testconnection() {
    try{
        await sequelize.authenticate();
        console.log("Connection established successfully");
    }
    catch (err){
        console.error("Error", err);
    }
  }
  testconnection();

sequelize.sync()
.then(()=>{
    console.log("Database synced")
})
.catch(()=>{
    console.log("Database not synced");
})

const data = sequelize.define('data', {
    name :{
        type: DataTypes.STRING,
        primaryKey : true,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    age : {
        type : DataTypes.INTEGER,
        allowNull : false,
    }
})
