import { DataTypes } from 'sequelize';
import { sequelize } from "@/dbConfig/connect";

const Employee = sequelize.define('Employees', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address_street: {
    type: DataTypes.STRING
  },
  address_city: {
    type: DataTypes.STRING
  },
  address_state: {
    type: DataTypes.STRING
  },
  address_zip: {
    type: DataTypes.STRING
  },
  emergency_contact_name: {
    type: DataTypes.STRING
  },
  emergency_contact_phone_number: {
    type: DataTypes.STRING
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  manager_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Employees',
      key: 'id'
    }
  },
  employment_type: {
    type: DataTypes.ENUM('Full-time', 'Part-time', 'Contract'),
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  probation_end_date: {
    type: DataTypes.DATE
  },
  employment_status: {
    type: DataTypes.ENUM('Active', 'Inactive', 'On Leave'),
    defaultValue: 'Active'
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  pay_frequency: {
    type: DataTypes.ENUM('Monthly', 'Bi-weekly'),
    allowNull: false
  },
  bank_name: {
    type: DataTypes.STRING
  },
  account_number: {
    type: DataTypes.STRING
  },
  health_insurance: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  retirement_plan: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  tax_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  filing_status: {
    type: DataTypes.STRING
  },
  withholding_allowances: {
    type: DataTypes.INTEGER
  },
  role_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Roles',
      key: 'id'
    }
  }
});


export default Employee;