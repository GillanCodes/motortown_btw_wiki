import axios from "axios";
import { AppDispatch } from "../types/dispatch.type";

export const GET_CATEGORIES = "GET_CATEGORIES";

export const getCategories = () => {
  return async (dispatch: AppDispatch) => {
    return await axios({
      method: "GET",
      url: "/api/category"
    }).then((res) => {
      dispatch({ type: GET_CATEGORIES, payload: res.data });
    }).catch((error) => {
      console.log(error) // TODO : Error Handle    
    })
  }
}

