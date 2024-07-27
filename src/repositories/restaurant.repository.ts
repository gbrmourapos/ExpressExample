import { IRestaurant, IRestaurantDoc, Restaurant } from "../models";

const create = async (payload: IRestaurant): Promise<IRestaurantDoc> => {
  const restaurant = Restaurant.build(payload);
  await restaurant.save();
  return restaurant;
};

const update = async (id: string, payload: IRestaurant): Promise<any> => {
  const restaurant = await Restaurant.updateOne(
    { _id: id },
    {
      $set: {
        name: payload.name,
        category: payload.category,
        address: payload.address,
        mail: payload.mail,
        phone: payload.phone,
      },
    }
  );

  return restaurant;
};

const getAll = async (): Promise<any> => {
  const restaurant = await Restaurant.find();
  return restaurant;
};

const getById = async (id: string): Promise<any> => {
  const restaurant = await Restaurant.find({ _id: id });

  if (!restaurant || restaurant.length <= 0) {
    throw new Error("Restaurant not found");
  }

  return restaurant[0];
};

const deleteById = async (id: string): Promise<any> => {
  const restaurant = await Restaurant.deleteOne({ _id: id });
  console.log(restaurant);
  return restaurant;
};

export { create, getAll, getById, deleteById, update };
