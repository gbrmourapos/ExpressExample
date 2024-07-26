import { Router } from "express";
import { createTodo, deleteTodo, getTodo, listTodo } from "../controllers";

const todosRoute = Router();

todosRoute.post("/", createTodo);
todosRoute.get("/", listTodo);
todosRoute.get("/:id", getTodo);
todosRoute.delete("/:id", deleteTodo);

export { todosRoute };
