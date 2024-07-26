import { Request, Response } from "express";
import {
  create,
  deleteById,
  getAll,
  getById,
  update,
} from "../repositories/user.repository";
import { UserRequestDTO, UserResponseDTO } from "../types/user.type";

const listUser = async (req: Request, res: Response) => {
  try {
    const users = await getAll();
    const usersDto = users.map((user) => ({
      name: user.name,
      lastname: user.lastname,
      age: user.age,
      address: user.address,
      id: user.id,
    }));

    return res.status(200).send(usersDto);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = await getById(id);
    const userDto = {
      name: user.name,
      lastname: user.lastname,
      age: user.age,
      address: user.address,
      id: user.id,
    };

    return res.status(200).send(userDto);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const userRequest: UserRequestDTO = req.body;
    const user = await create({
      name: userRequest.name,
      lastname: userRequest.lastname,
      age: userRequest.age,
      address: userRequest.address,
    });

    const userResponse = {
      name: user.name,
      lastname: user.lastname,
      age: user.age,
      address: user.address,
      id: user.id,
    };

    return res.status(200).send(userResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const isDeleted = await deleteById(id);

    return res.status(204).send({
      success: isDeleted,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const userRequest: UserRequestDTO = req.body;

    const user = await update(id, {
      name: userRequest.name,
      lastname: userRequest.lastname,
      age: userRequest.age,
      address: userRequest.address,
    });

    const userResponse = {
      name: user.name,
      lastname: user.lastname,
      age: user.age,
      address: user.address,
      id: user.id,
    };

    return res.status(200).send(userResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { listUser, getUser, createUser, deleteUser, updateUser };
