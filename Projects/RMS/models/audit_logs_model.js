const {DataTypes} = require('sequelize');
const {sequlize} = require('../config/db');
const candidates = require('./candidatemodel');
const employees =require('./employee');

const Audit_log = sequlize.define('audit_log', {
    log_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      candidate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Candidate,
          key: 'candidate_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      emp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Employee,
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      action: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      modified_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      value_before: {
        type: DataTypes.JSON,
        allowNull: false
      },
      value_after: {
        type: DataTypes.JSON,
        allowNull: false
      }
});

Candidate.hasMany(Audit_log, { foreignKey: 'candidate_id' });
Audit_log.belongsTo(Candidates, { foreignKey: 'candidate_id' });
Employee.hasMany(Audit_log, { foreignKey: 'id' });
Audit_log.belongsTo(Employees, { foreignKey: 'id' });

module.exports = Audit_log;