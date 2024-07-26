import { Op } from "sequelize";
import { User, UserInput, UserOuput } from "../models";

const create = async (payload: UserInput): Promise<UserOuput> => {
  return await User.create(payload);
};

const update = async (
  id: number,
  payload: Partial<UserInput>
): Promise<UserOuput> => {
  const user = await User.findByPk(id);

  if (!User) {
    throw new Error("User not found");
  }

  return await (user as User).update(payload);
};

const getById = async (id: number): Promise<UserOuput> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const deleteById = async (id: number): Promise<boolean> => {
  const deletedUserCount = await User.destroy({
    where: { id },
  });
  
  return !!deletedUserCount;
};

const getAll = async (): Promise<UserOuput[]> => {
  return User.findAll();
};

export { create, update, getById, getAll, deleteById };
