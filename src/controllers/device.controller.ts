import { Request, Response } from "express";
import {
  create,
  deleteById,
  getAll,
  getById,
  update,
} from "../repositories/device.repository";
import { DeviceRequestDTO } from "../types/device.type";

const listDevice = async (req: Request, res: Response) => {
  try {
    const devices = await getAll();
    const devicesDto = devices.map((device) => ({
      id: device.id,
      type: device.type,
      processor: device.processor,
      memory: device.memory,
      videoCard: device.videoCard,
      hardDisk: device.hardDisk,
    }));

    return res.status(200).send(devicesDto);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getDevice = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const device = await getById(id);
    const deviceDto = {
      id: device.id,
      type: device.type,
      processor: device.processor,
      memory: device.memory,
      videoCard: device.videoCard,
      hardDisk: device.hardDisk,
    };

    return res.status(200).send(deviceDto);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const createDevice = async (req: Request, res: Response) => {
  try {
    const deviceRequest: DeviceRequestDTO = req.body;
    const device = await create({
      type: deviceRequest.type,
      processor: deviceRequest.processor,
      memory: deviceRequest.memory,
      videoCard: deviceRequest.videoCard,
      hardDisk: deviceRequest.hardDisk,
    });

    const deviceResponse = {
      id: device.id,
      type: device.type,
      processor: device.processor,
      memory: device.memory,
      videoCard: device.videoCard,
      hardDisk: device.hardDisk,
    };

    return res.status(200).send(deviceResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteDevice = async (req: Request, res: Response) => {
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

const updateDevice = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deviceRequest: DeviceRequestDTO = req.body;

    const device = await update(id, {
      type: deviceRequest.type,
      processor: deviceRequest.processor,
      memory: deviceRequest.memory,
      videoCard: deviceRequest.videoCard,
      hardDisk: deviceRequest.hardDisk,
    });

    const deviceResponse = {
      id: device.id,
      type: device.type,
      processor: device.processor,
      memory: device.memory,
      videoCard: device.videoCard,
      hardDisk: device.hardDisk,
    };

    return res.status(200).send(deviceResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { listDevice, getDevice, createDevice, deleteDevice, updateDevice };
