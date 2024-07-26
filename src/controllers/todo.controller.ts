import { Request, Response } from "express";
import { TodoRequestDTO, TodoResponseDTO } from "../types/todo.type";
import { ITodo } from "../models/todo.model";
import { create, deleteById, getAll, getById } from "../repositories/todo.repository";

const createTodo = async (req: Request, res: Response) => {
  try {
    const todoRequest: TodoRequestDTO = req.body;
    const iTodo: ITodo = {
      title: todoRequest.title,
      group: todoRequest.group,
      description: todoRequest.description,
      createdAt: new Date(),
    };

    const todo = await create(iTodo);
    const todoResponse: TodoResponseDTO = {
      id: todo._id,
      title: todo.title,
      description: todo.description,
      group: todo.group,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    }

    return res.status(200).send(todoResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getTodo = async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id); 
    const todo = await getById(id);
    const todoResponse: TodoResponseDTO = {
      id: todo._id,
      title: todo.title,
      description: todo.description,
      group: todo.group,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    };

    return res.status(200).send(todoResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const listTodo = async (req: Request, res: Response) => {
  try {
    const todos = await getAll();
    const todosResponse: Array<TodoResponseDTO> = todos.map((todo: any) => ({
      id: todo._id,
      title: todo.title,
      description: todo.description,
      group: todo.group,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    }));

    return res.status(200).send(todosResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id); 
    const todo = await deleteById(id);

    if (todo.deletedCount === 1) {
      return res.status(200).send({
        success: true
      });
    }

    return res.status(404).send();

  } catch (err) {
    return res.status(500).send(err);
  }
};

export { createTodo, listTodo, getTodo, deleteTodo };
