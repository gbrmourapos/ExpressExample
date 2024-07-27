import { Router } from "express";
import { createRestaurant, deleteRestaurant, getRestaurant, listRestaurant, updateRestaurant } from "../controllers";

const restaurantRoute = Router();

restaurantRoute.post("/", createRestaurant);
restaurantRoute.get("/", listRestaurant);
restaurantRoute.get("/:id", getRestaurant);
restaurantRoute.delete("/:id", deleteRestaurant);
restaurantRoute.put('/:id', updateRestaurant)

export { restaurantRoute };
