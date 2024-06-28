import { DataTypes } from "sequelize";
import { sequelize } from "@/dbConfig/connect";

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  role_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Roles',
      key: 'id'
    }
  },
  organization_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default User;