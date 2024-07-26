import express, { Request, Response, NextFunction } from "express";
import { devicesRoute, productsRoute, todosRoute, usersRoute } from "./routes";
import dbInit from "./context/dbinit";
import { mongoDbInit } from "./context/mongodb-connection";

const app = express();
const port = 5000;

dbInit();
mongoDbInit();

app.use(express.json());
app.use('/product', productsRoute)
app.use('/user', usersRoute)
app.use('/device', devicesRoute)
app.use('/todo', todosRoute)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});