import { Op } from "sequelize";
import { Device, DeviceInput, DeviceOuput } from "../models";

const create = async (payload: DeviceInput): Promise<DeviceOuput> => {
  return await Device.create(payload);
};

const update = async (
  id: number,
  payload: Partial<DeviceInput>
): Promise<DeviceOuput> => {
  const device = await Device.findByPk(id);

  if (!device) {
    throw new Error("Device not found");
  }

  return await (device as Device).update(payload);
};

const getById = async (id: number): Promise<DeviceOuput> => {
  const device = await Device.findByPk(id);

  if (!device) {
    throw new Error("Device not found");
  }

  return device;
};

const deleteById = async (id: number): Promise<boolean> => {
  const deletedDeviceCount = await Device.destroy({
    where: { id },
  });
  
  return !!deletedDeviceCount;
};

const getAll = async (): Promise<DeviceOuput[]> => {
  return Device.findAll();
};

export { create, update, getById, getAll, deleteById };
