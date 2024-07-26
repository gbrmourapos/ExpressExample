import { Router } from "express";
import {
  listProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/index";

const productsRoute = Router();

productsRoute.get("/", listProduct);
productsRoute.post("/", createProduct);
productsRoute.get("/:id", getProduct);
productsRoute.put("/:id", updateProduct);
productsRoute.delete("/:id", deleteProduct);

export { productsRoute };
