import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "products",
})
export default class Product extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "name"
  })
  title?: string;

  @Column({
    type: DataType.STRING(255),
    field: "description"
  })
  description?: string;

  @Column({
    type: DataType.INTEGER,
    field: "size"
  })
  size?: number;

  @Column({
    type: DataType.STRING(24),
    field: "type"
  })
  type?: string;
}