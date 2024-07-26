import { Device, Product } from "../models"
import { User } from "../models/user.model";
import 'dotenv/config';

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
  Product.sync({ alter: isDev, force: isDev });
  User.sync({ alter: isDev, force: isDev })
  Device.sync({ alter: isDev, force: isDev })
};

export default dbInit;
