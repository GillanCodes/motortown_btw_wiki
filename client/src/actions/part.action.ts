import axios from "axios";
import { AppDispatch } from "../types/dispatch.type";

export const GET_PARTS = "GET_PARTS";

export const getParts = () => {
  return async (dispatch: AppDispatch) => {
    return await axios({
      method: "GET",
      url: "/api/part"
    }).then((res) => {
      dispatch({ type: GET_PARTS, payload: res.data });
    }).catch((error) => {
      console.log(error) // TODO : Error Handle    
    })
  }
}

export const getPart = (slug: string) => async () => {
  try {
    const res = await axios.get('/api/part/' + slug);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
