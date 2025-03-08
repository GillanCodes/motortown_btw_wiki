import Vehicle from "../../../shared/models/Vehicle";
import { CREATE_VEHICLE, DELETE_VEHICLE, GET_VEHICLES } from "../actions/vehicle.action";
import { Action } from "../types/action.type";

const initialState:object = {};

export default function VehicleReducer(state = initialState, action:Action)
{
  switch(action.type)
  {
    case GET_VEHICLES:
      return action.payload;
    case CREATE_VEHICLE:
      return [...state, action.payload]
    case DELETE_VEHICLE:
      return state.filter((v:Vehicle) => v._id !== action.payload._id);
    default:
      return state;
  }
}
