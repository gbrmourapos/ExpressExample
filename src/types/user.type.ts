type UserRequestDTO = {
    name: string;
    lastname: string;
    age: number;
    address: string;
  };
  
  type UserResponseDTO = {
    id: number;
    name: string;
    lastname: string;
    age: number;
    address: string;
  };
  
  export { UserRequestDTO, UserResponseDTO };
  