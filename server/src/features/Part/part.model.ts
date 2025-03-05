import { model, Schema } from "mongoose";
import { Part } from "../../../../shared/models/Part";



const partSchema = new Schema<Part>({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: "Default description"
  },
  info: {
    mass: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    },
    betterment: {
      size: {type:Number, required: false},
      unit: {type:String, required:false}
    }
  }
}, {timestamps:true});

//default export.
const partModel = model('Part', partSchema);
export default partModel;
