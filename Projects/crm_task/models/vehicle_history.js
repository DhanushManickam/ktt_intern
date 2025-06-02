const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.js');

const vehicle_history = sequelize.define('vehicle_history',{
    history_id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
    },
    paid_date :{
        type : DataTypes.DATE,
        allowNull : false,
        get() {
      const rawValue = this.getDataValue('paid_date');
      if (!rawValue) {
        return null;
      }
      const date = new Date(rawValue);
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });

      return `${formattedDate} ${formattedTime}`;
    },
    },
    vehicle : {
        type : DataTypes.STRING(13),
        allowNull : false
    },
    name : {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    due_date : {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    company: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    amount_paid:{
        type:DataTypes.INTEGER,
        allowNull : true,
    }
})

module.exports = vehicle_history;