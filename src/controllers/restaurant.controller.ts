import { Request, Response } from "express";
import {
  RestaurantRequestDTO,
  RestaurantResponseDTO,
} from "../types/restaurant.type";
import { IRestaurant } from "../models";
import {
  create,
  deleteById,
  getAll,
  getById,
  update,
} from "../repositories/restaurant.repository";

const createRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurantRequest: RestaurantRequestDTO = req.body;
    const iRestaurant: IRestaurant = {
      name: restaurantRequest.name,
      category: restaurantRequest.category,
      address: restaurantRequest.address,
      mail: restaurantRequest.mail,
      phone: restaurantRequest.phone,
    };

    const restaurant = await create(iRestaurant);
    const restaurantResponse: RestaurantResponseDTO = {
      id: restaurant._id,
      name: restaurant.name,
      category: restaurant.category,
      address: restaurant.address,
      mail: restaurant.mail,
      phone: restaurant.phone,
    };

    return res.status(200).send(restaurantResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getRestaurant = async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id);
    const restaurant = await getById(id);
    const restaurantResponse: RestaurantResponseDTO = {
      id: restaurant._id,
      name: restaurant.name,
      category: restaurant.category,
      address: restaurant.address,
      mail: restaurant.mail,
      phone: restaurant.phone,
    };

    return res.status(200).send(restaurantResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const listRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurants = await getAll();
    const restaurantsResponse: Array<RestaurantResponseDTO> = restaurants.map(
      (restaurant: any) => ({
        id: restaurant._id,
        name: restaurant.name,
        category: restaurant.category,
        address: restaurant.address,
        mail: restaurant.mail,
        phone: restaurant.phone,
      })
    );

    return res.status(200).send(restaurantsResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id);
    const restaurant = await deleteById(id);

    if (restaurant.deletedCount === 1) {
      return res.status(200).send({
        success: true,
      });
    }

    return res.status(404).send();
  } catch (err) {
    return res.status(500).send(err);
  }
};

const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id);
    const restaurantRequest: RestaurantRequestDTO = req.body;
    const iRestaurant: IRestaurant = {
      name: restaurantRequest.name,
      category: restaurantRequest.category,
      address: restaurantRequest.address,
      mail: restaurantRequest.mail,
      phone: restaurantRequest.phone,
    };

    const updateResponse = await update(id, iRestaurant);

    if (updateResponse.modifiedCount > 0) {
      const restaurant = await getById(id);
      const restaurantResponse: RestaurantResponseDTO = {
        id: restaurant._id,
        name: restaurant.name,
        category: restaurant.category,
        address: restaurant.address,
        mail: restaurant.mail,
        phone: restaurant.phone,
      };

      return res.status(200).send(restaurantResponse);
    }

    return res.status(404).send();
  } catch (err) {
    return res.status(500).send(err);
  }
};

export {
  createRestaurant,
  listRestaurant,
  getRestaurant,
  deleteRestaurant,
  updateRestaurant,
};
