import { DataTypes } from "sequelize";
import { sequelize } from "@/dbConfig/connect";

export const Role = sequelize.define("Roles", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  role_type: {
    type: DataTypes.ENUM('AGENT', 'ADMIN', 'MARKETING', 'SALES'),
    allowNull: false
  }
});

export const Permission = sequelize.define("Permissions", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  default_role_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Roles',
      key: 'id'
    }
  },
  actions: {
    type: DataTypes.JSON,
    allowNull: true
  }
});