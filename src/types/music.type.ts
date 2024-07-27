type MusicRequestDTO = {
  name: string;
  durantion: number;
  genre: string;
  artist: string;
};

type MusicResponseDTO = {
  id: string;
  name: string;
  durantion: number;
  genre: string;
  artist: string;
};

export { MusicResponseDTO, MusicRequestDTO };
