import { Op } from "sequelize";
import { Product, ProductInput, ProductOuput } from "../models";

const create = async (payload: ProductInput): Promise<ProductOuput> => {
  return await Product.create(payload);
};

const update = async (
  id: number,
  payload: Partial<ProductInput>
): Promise<ProductOuput> => {
  const product = await Product.findByPk(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return await (product as Product).update(payload);
};

const getById = async (id: number): Promise<ProductOuput> => {
  const product = await Product.findByPk(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

const deleteById = async (id: number): Promise<boolean> => {
  const deletedProductCount = await Product.destroy({
    where: { id },
  });
  
  return !!deletedProductCount;
};

const getAll = async (): Promise<ProductOuput[]> => {
  return Product.findAll();
};

export { create, update, getById, getAll, deleteById };
