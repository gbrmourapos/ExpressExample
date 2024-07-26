import { ITodo, ITodoDoc, Todo } from "../models/todo.model";

const create = async (payload: ITodo): Promise<ITodoDoc> => {
  const todo = Todo.build(payload);
  await todo.save();
  return todo;
};

const getAll = async (): Promise<any> => {
  const todo = await Todo.find();
  return todo;
};

const getById = async (id: string): Promise<any> => {
  const todo = await Todo.find({_id: id});

  if (!todo || todo.length <= 0) {
    throw new Error("Todo not found");
  }

  return todo[0];
};

const deleteById = async (id: string): Promise<any> => {
  const todo = await Todo.deleteOne({_id: id});
  console.log(todo);
  return todo;
}

export { create, getAll, getById, deleteById };
