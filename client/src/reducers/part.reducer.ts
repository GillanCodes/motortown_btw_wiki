import { GET_PARTS } from "../actions/part.action";
import { Action } from "../types/action.type";

const initialState: object = {};

export default function PartReducer(state = initialState, action: Action) {
  switch (action.type) {
    case GET_PARTS:
      return action.payload;
    default:
      return state;
  }
}
