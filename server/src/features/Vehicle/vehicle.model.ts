import { model, Schema } from "mongoose";
import { Vehicle } from "../../../../shared/models/Vehicle";

const vehicleSchema = new Schema<Vehicle>({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  picture: {
    type:String,
    required: false,
  },
  info: {
    categories: {type:[String]},
    purpose: String,
    confort: Number,
    seats:Number,
    wheels:Number,
    powertrain:String,
    prices: {
      buy:Number,
      rent:Number
    },
    cargo: {
      type: [{type:String, unit:String, size:Number}]
    },
    unlock: {
      type: [{job:String, level:Number}]
    }
  },
  parts: {
    type:[String],
    ref: "Part"
  },
  location: {
    x: Number,
    y: Number
  }
}, {timestamps:true});

//default export.
const vehicleModel = model('Vehicle', vehicleSchema);
export default vehicleModel;
