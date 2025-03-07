import { combineReducers } from "redux";
import VehicleReducer from "./vehicle.reducer";
import CategoryReducer from "./category.reducer";

const rootReducer = combineReducers({
  VehicleReducer,
  CategoryReducer
});

export default rootReducer;
