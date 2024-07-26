import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../context/connection";

interface DeviceAttributes {
  id: number;
  type: string;
  processor: string;
  memory: string;
  videoCard: string;
  hardDisk: string;
}

interface DeviceInput extends Optional<DeviceAttributes, "id"> {}
interface DeviceOuput extends Required<DeviceAttributes> {}

class Device
  extends Model<DeviceAttributes, DeviceInput>
  implements DeviceAttributes
{
  public id!: number;
  public type!: string;
  public processor!: string;
  public memory!: string;
  public videoCard!: string;
  public hardDisk!: string;
}

Device.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    processor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    memory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videoCard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hardDisk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export { Device, DeviceInput, DeviceOuput };
