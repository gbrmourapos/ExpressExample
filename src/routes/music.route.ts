import { Router } from "express";
import { createMusic, deleteMusic, getMusic, listMusic, updateMusic } from "../controllers";

const musicRoute = Router();

musicRoute.post("/", createMusic);
musicRoute.get("/", listMusic);
musicRoute.get("/:id", getMusic);
musicRoute.delete("/:id", deleteMusic);
musicRoute.put('/:id', updateMusic)

export { musicRoute };
