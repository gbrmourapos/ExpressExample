type RestaurantRequestDTO = {
  name: string;
  category: string;
  address: string;
  mail: string;
  phone: string;
};

type RestaurantResponseDTO = {
  id: string;
  name: string;
  category: string;
  address: string;
  mail: string;
  phone: string;
};

export { RestaurantResponseDTO, RestaurantRequestDTO };
