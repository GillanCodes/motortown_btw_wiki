import { GET_VEHICLES } from "../actions/vehicle.action";
import { Action } from "../types/action.type";

const initialState:object = {};

export default function VehicleReducer(state = initialState, action:Action)
{
  switch(action.type)
  {
    case GET_VEHICLES:
      return action.payload;
    default:
      return state;
  }
}
