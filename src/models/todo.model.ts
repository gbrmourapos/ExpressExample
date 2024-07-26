import mongoose from "mongoose";

interface ITodo {
  title: string;
  description: string;
  group: string;
  createdAt: Date;
  updatedAt?: Date;
}

interface ITodoDoc extends mongoose.Document {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  group: string;
}

interface TodoModelInterface extends mongoose.Model<any> {
  build(attr: ITodo): ITodoDoc;
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
});

todoSchema.statics.build = (attr: ITodo) => {
  return new Todo(attr);
};

const Todo = mongoose.model<any, TodoModelInterface>("Todo", todoSchema);

export { Todo, ITodo, ITodoDoc };
