import { model, Schema } from "mongoose";
import { Category, SubCategory } from "../../../../shared/models/Category"

const subCategory = new Schema<SubCategory>({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required:true,
    unique: true
  }
});

const categorySchema = new Schema<Category>({
  name: {
    type:String,
    required: true
  },
  slug: {
    type:String,
    required: true,
    unique: true
  },
  sub: {
    type: [subCategory],
    required: false,
    default: []
  },
}, {timestamps:true});

//default export.
const categoryModel = model('categories', categorySchema);
export default categoryModel;
