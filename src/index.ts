import express, { Request, Response, NextFunction } from "express";
import { productsRoute } from "./routes";

const app = express();
const port = 5000;

app.use(express.json());
app.use('/products', productsRoute)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});