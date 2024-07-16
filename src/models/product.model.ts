import { RowDataPacket } from "mysql2";

interface IProduct extends RowDataPacket {
    name: string;
    description: string;
    size: number;
    type: string;
}

export {IProduct }