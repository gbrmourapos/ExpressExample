import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../context/connection";

interface UserAttributes {
  id: number;
  name: string;
  lastname: string;
  age: number;
  address: string;
}

interface UserInput extends Optional<UserAttributes, "id"> {}
interface UserOuput extends Required<UserAttributes> {}

class User
  extends Model<UserAttributes, UserInput>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public lastname!: string;
  public age!: number;
  public address!: string;
}

User.init(
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
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export { User, UserInput, UserOuput };
