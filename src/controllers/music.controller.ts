import { Request, Response } from "express";
import { MusicRequestDTO, MusicResponseDTO } from "../types/music.type";
import { IMusic } from "../models";
import {
  create,
  deleteById,
  getAll,
  getById,
  update,
} from "../repositories/music.repository";

const createMusic = async (req: Request, res: Response) => {
  try {
    const musicRequest: MusicRequestDTO = req.body;
    const iMusic: IMusic = {
      name: musicRequest.name,
      durantion: musicRequest.durantion,
      genre: musicRequest.genre,
      artist: musicRequest.artist,
    };

    const music = await create(iMusic);
    const musicResponse: MusicResponseDTO = {
      id: music._id,
      name: music.name,
      durantion: music.durantion,
      genre: music.genre,
      artist: music.artist,
    };

    return res.status(200).send(musicResponse);
  } catch (err) {
    console.log(err)
    return res.status(500).send(err);
  }
};

const getMusic = async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id);
    const music = await getById(id);
    const musicResponse: MusicResponseDTO = {
      id: music._id,
      name: music.name,
      durantion: music.durantion,
      genre: music.genre,
      artist: music.artist,
    };

    return res.status(200).send(musicResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const listMusic = async (req: Request, res: Response) => {
  try {
    const musics = await getAll();
    const musicsResponse: Array<MusicResponseDTO> = musics.map(
      (music: any) => ({
        id: music._id,
        name: music.name,
        durantion: music.durantion,
        genre: music.genre,
        artist: music.artist,
      })
    );

    return res.status(200).send(musicsResponse);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteMusic = async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id);
    const music = await deleteById(id);

    if (music.deletedCount === 1) {
      return res.status(200).send({
        success: true,
      });
    }

    return res.status(404).send();
  } catch (err) {
    return res.status(500).send(err);
  }
};

const updateMusic = async (req: Request, res: Response) => {
  try {
    const id: string = String(req.params.id);
    const musicRequest: MusicRequestDTO = req.body;
    const iMusic: IMusic = {
      name: musicRequest.name,
      durantion: musicRequest.durantion,
      genre: musicRequest.genre,
      artist: musicRequest.artist,
    };

    const updateResponse = await update(id, iMusic);

    if (updateResponse.modifiedCount > 0) {
      const music = await getById(id);
      const musicResponse: MusicResponseDTO = {
        id: music._id,
        name: music.name,
        durantion: music.durantion,
        genre: music.genre,
        artist: music.artist,
      };

      return res.status(200).send(musicResponse);
    }

    return res.status(404).send();
  } catch (err) {
    return res.status(500).send(err);
  }
};

export { createMusic, listMusic, getMusic, deleteMusic, updateMusic };
