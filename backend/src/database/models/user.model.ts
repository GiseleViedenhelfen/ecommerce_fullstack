import { DataTypes, Model } from "sequelize";
import db from '.'

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  role: string;
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
},  {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
})


export default User;