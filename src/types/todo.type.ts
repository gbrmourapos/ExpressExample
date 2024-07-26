type TodoRequestDTO = {
  title: string;
  description: string;
  group: string;
};

type TodoResponseDTO = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  group: string;
};

export { TodoRequestDTO, TodoResponseDTO };
