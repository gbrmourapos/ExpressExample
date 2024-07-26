import { Request, Response } from "express";
import {
  create,
  deleteById,
  getAll,
  getById,
  update,
} from "../repositories/product.repository";
import { ProductRequestDTO } from "../types/product.type";

const listProduct = async (req: Request, res: Response) => {
  try {
    const products = await getAll();
    const productsDto = products.map((product) => ({
      description: product.description,
      name: product.name,
      size: product.size,
      type: product.type,
      id: product.id,
    }));

    return res.status(200).send(productsDto);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const product = await getById(id);
    const productDto = {
      description: product.description,
      name: product.name,
      size: product.size,
      type: product.type,
      id: product.id,
    };

    return res.status(200).send(productDto);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const productRequest: ProductRequestDTO = req.body;
    const product = await create({
      description: productRequest.description,
      name: productRequest.name,
      size: productRequest.size,
      type: productRequest.type,
    });

    const productResponse = {
      description: product.description,
      name: product.name,
      size: product.size,
      type: product.type,
      id: product.id,
    };

    return res.status(200).send(productResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const productRequest: ProductRequestDTO = req.body;

    const product = await update(id, {
      description: productRequest.description,
      name: productRequest.name,
      size: productRequest.size,
      type: productRequest.type,
    });

    const productResponse = {
      description: product.description,
      name: product.name,
      size: product.size,
      type: product.type,
      id: product.id,
    };

    return res.status(200).send(productResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { listProduct, getProduct, createProduct, deleteProduct, updateProduct };
