import Product from "../models/product.model";
import { IBaseRepository } from "../types/repository.type";

class ProductRepository implements IBaseRepository<Product> {

    async save(tutorial: Product): Promise<Product> {
        try {
            return await Product.create({});
        } catch (err) {
            throw new Error("Failed to create product!");
        }
    }

    async retrieveAll(): Promise<Product<Product>> { }

    async retrieveById(ProductId: number): Promise<Product | null> { }

    async update(Product: Product): Promise<number> { }

    async delete(ProductId: number): Promise<number> { }
}

export default new ProductRepository();