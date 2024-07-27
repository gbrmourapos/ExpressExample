import mongoose from "mongoose";

interface IMusic {
  name: string;
  durantion: number;
  genre: string;
  artist: string;
}

interface IMusicDoc extends mongoose.Document {
  _id: string;
  name: string;
  durantion: number;
  genre: string;
  artist: string;
}

interface MusicModelInterface extends mongoose.Model<any> {
  build(attr: IMusic): IMusicDoc;
}

const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  durantion: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
});

musicSchema.statics.build = (attr: IMusic) => {
  return new Music(attr);
};

const Music = mongoose.model<any, MusicModelInterface>("Music", musicSchema);


export { Music, IMusic, IMusicDoc };
