import mongoose from "mongoose";

interface IRestaurant {
  name: string;
  category: string;
  address: string;
  mail: string;
  phone: string;
}

interface IRestaurantDoc extends mongoose.Document {
  _id: string;
  name: string;
  category: string;
  address: string;
  mail: string;
  phone: string;
}

interface RestaurantModelInterface extends mongoose.Model<any> {
  build(attr: IRestaurant): IRestaurantDoc;
}

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
  },
  phone: {
    type: String,
  },
});


restaurantSchema.statics.build = (attr: IRestaurant) => {
  return new Restaurant(attr);
};

const Restaurant = mongoose.model<any, RestaurantModelInterface>("Restaurant", restaurantSchema);


export { Restaurant, IRestaurant, IRestaurantDoc };
