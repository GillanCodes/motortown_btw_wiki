import { combineReducers } from "redux";
import VehicleReducer from "./vehicle.reducer";
import CategoryReducer from "./category.reducer";
import PartReducer from "./part.reducer";

const rootReducer = combineReducers({
  VehicleReducer,
  CategoryReducer,
  PartReducer
});

export default rootReducer;
