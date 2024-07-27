import { Router } from "express";
import { createTodo, deleteTodo, getTodo, listTodo, updateTodo } from "../controllers";

const todosRoute = Router();

todosRoute.post("/", createTodo);
todosRoute.get("/", listTodo);
todosRoute.get("/:id", getTodo);
todosRoute.delete("/:id", deleteTodo);
todosRoute.put('/:id', updateTodo)

export { todosRoute };
