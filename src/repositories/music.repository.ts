import { IMusic, IMusicDoc, Music } from "../models";

const create = async (payload: IMusic): Promise<IMusicDoc> => {
  const restaurant = Music.build(payload);
  await restaurant.save();
  return restaurant;
};

const update = async (id: string, payload: IMusic): Promise<any> => {
  const restaurant = await Music.updateOne(
    { _id: id },
    {
      $set: {
        name: payload.name,
        durantion: payload.durantion,
        genre: payload.genre,
        artist: payload.artist,
      },
    }
  );

  return restaurant;
};

const getAll = async (): Promise<any> => {
  const restaurant = await Music.find();
  return restaurant;
};

const getById = async (id: string): Promise<any> => {
  const restaurant = await Music.find({ _id: id });

  if (!restaurant || restaurant.length <= 0) {
    throw new Error("Music not found");
  }

  return restaurant[0];
};

const deleteById = async (id: string): Promise<any> => {
  const restaurant = await Music.deleteOne({ _id: id });
  console.log(restaurant);
  return restaurant;
};

export { create, getAll, getById, deleteById, update };
