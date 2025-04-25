const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const candidates = sequelize.define('candidate', {
  candidate_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  email_id: {
    type: DataTypes.STRING(40),
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  contact_no: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  qualification: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  resume: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  gitlink: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  source: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  emp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  company: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  designation: {
    type: DataTypes.STRING(40),
    allowNull: true,
  },
  experience: {
    type: DataTypes.DECIMAL(3, 1),
    allowNull: true,
  },
  notice_period: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  sal_type: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  current_salary: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  expected_salary: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  skill_set: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  task_name: {
    type: DataTypes.STRING(30),
    allowNull : true
  },
  task_status: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  assigned_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  task_rework: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  rework_status: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  rework_assigned: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  rework_deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  task_remark: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  interview_dt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  interview_status: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  technical_skills: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
  },
  communication_skills: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
  },
  problem_solving: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
  },
  overall_ratings: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
  },
  interview_remark: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  re_interview: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  re_interview_dt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  re_interview_ratings: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
  },
  reporting_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  reporting_time: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  reporting_location: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  onboarding_status: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING(40),
    allowNull: true,
  },
  follow_up_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  overall_remark: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = candidates;
