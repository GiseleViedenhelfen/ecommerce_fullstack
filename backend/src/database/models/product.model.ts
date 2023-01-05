import { DataTypes, Model } from "sequelize";
import db from '.'

class Product extends Model {
  id!: number;
  name!: string;
  brand: string;
  price: string;
  imageLink: string;
  description: string;
  category: string;
  productType: string;
}
Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: DataTypes.STRING,
  price: DataTypes.STRING,
  imageLink: DataTypes.STRING,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  productType: DataTypes.STRING
},  {
  sequelize: db,
  modelName: 'products',
  timestamps: false,
})


export default Product;