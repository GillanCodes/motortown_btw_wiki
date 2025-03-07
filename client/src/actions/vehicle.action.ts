import axios from "axios";
import { AppDispatch } from "../types/dispatch.type";

export const GET_VEHICLES = "GET_VEHICLES";

export const getVehicles = () => {
  return (dispatch:AppDispatch) => {
    return axios({
      method:"GET",
      url: "/api/vehicle"
    }).then((res) => {
      dispatch({type: GET_VEHICLES, payload: res.data});
    }).catch((error) => {
      console.log(error) // TODO : Error Handle    
    })
  }
}
