type DeviceRequestDTO = {
    type: string;
    processor: string;
    memory: string;
    videoCard: string;
    hardDisk: string;
  };
  
  type DeviceResponseDTO = {
    id: number;
    type: string;
    processor: string;
    memory: string;
    videoCard: string;
    hardDisk: string;
  };
  
  export { DeviceRequestDTO, DeviceResponseDTO };
  