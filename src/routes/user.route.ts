import { Router } from "express";
import {
  listUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers";

const usersRoute = Router();

usersRoute.get("/", listUser);
usersRoute.post("/", createUser);
usersRoute.get("/:id", getUser);
usersRoute.put("/:id", updateUser);
usersRoute.delete("/:id", deleteUser);

export { usersRoute };
