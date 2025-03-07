import { GET_CATEGORIES } from "../actions/category.action";
import { Action } from "../types/action.type";

const initialState:object = {};

export default function CategoryReducer(state = initialState, action:Action)
{
  switch(action.type)
  {
    case GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}
