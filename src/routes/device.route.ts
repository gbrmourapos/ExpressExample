import { Router } from "express";
import {
  listDevice,
  getDevice,
  createDevice,
  updateDevice,
  deleteDevice,
} from "../controllers";

const devicesRoute = Router();

devicesRoute.get("/", listDevice);
devicesRoute.post("/", createDevice);
devicesRoute.get("/:id", getDevice);
devicesRoute.put("/:id", updateDevice);
devicesRoute.delete("/:id", deleteDevice);

export { devicesRoute };
