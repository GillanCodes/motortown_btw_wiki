import axios from "axios";
import { AppDispatch } from "../types/dispatch.type";

export const GET_VEHICLES = "GET_VEHICLES";
export const CREATE_VEHICLE = "CREATE_VEHICLE";
export const DELETE_VEHICLE = "DELETE_VEHICLE";

export const getVehicles = () => {
  return async (dispatch: AppDispatch) => {
    return await axios({
      method: "GET",
      url: "/api/vehicle"
    }).then((res) => {
      dispatch({ type: GET_VEHICLES, payload: res.data });
    }).catch((error) => {
      console.log(error) // TODO : Error Handle    
    })
  }
}

export const getVehicle = (slug: string) => async () => {
  try {
    const res = await axios.get('/api/vehicle/' + slug);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const createVehicle = (data:any) => {
  return async (dispatch:AppDispatch) => {
    return await axios({
      method:"POST",
      withCredentials: true,
      url: "/api/vehicle",
      data: data
    }).then((res) => {
      dispatch({ type: CREATE_VEHICLE, payload:res.data});
    })
  }
}

export const editVehicle = (id:string, data:any) => {
  return async (dispatch:AppDispatch) => {
    return await axios({
      method:"PUT",
      withCredentials: true,
      url: "/api/vehicle/" + id,
      data: data
    }).then((res) => {
      dispatch({ type: CREATE_VEHICLE, payload:res.data});
    })
  }
}

export const deleteVehicle = (id:string) => {
  return async (dispatch:AppDispatch) => {
    return await axios({
      method:"DELETE",
      withCredentials: true,
      url: "/api/vehicle/" + id,
    }).then((res) => {
      dispatch({ type: DELETE_VEHICLE, payload:res.data});
    })
  }
}
