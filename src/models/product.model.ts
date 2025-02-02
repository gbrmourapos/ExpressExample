import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../context/connection";

interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  size: number;
  type: string;
}

interface ProductInput extends Optional<ProductAttributes, "id"> {}
interface ProductOuput extends Required<ProductAttributes> {}

class Product
  extends Model<ProductAttributes, ProductInput>
  implements ProductAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public size!: number;
  public type!: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    size: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export { Product, ProductInput, ProductOuput };
