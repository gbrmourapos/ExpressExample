type ProductRequestDTO = {
  name: string;
  description: string;
  size: number;
  type: string;
};

type ProductResponseDTO = {
  id: number;
  name: string;
  description: string;
  size: number;
  type: string;
};

export { ProductRequestDTO, ProductResponseDTO };
