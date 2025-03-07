import { useParams } from "react-router";
import "./Vehicle.scss";
import { InfoBox } from "./InfoBox";
import { PartsBox } from "./PartsBox";
import VehicleClass from "../../../../../shared/models/Vehicle.ts";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../types/dispatch.type.ts";
import { getVehicle } from "../../../actions/vehicle.action.ts";

export default function Vehicle() {

  const { slug } = useParams<{ slug: string }>();

  const dispatch = useDispatch<AppDispatch>();
  const [vehicleData, setVehicleData] = useState();

  useEffect(() => {
    const getItem = async () => {
      try {
        const data:any = await dispatch(getVehicle(slug!));
        setVehicleData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getItem();
  }, []);

  if (!vehicleData) {
    return 'no vehicule';
    // TODO : Error page
  }

  const vehicle:VehicleClass = new VehicleClass(vehicleData);
  console.log(vehicleData ,vehicle)
  return (
    <div className="container vehicule__container">
      <div className="grid">

        <div className="box" id="title">
          <h1>{vehicle.name}</h1>
        </div>
        <div className="box" id="image">
          <img src={vehicle.picture} alt={vehicle.name} />
        </div>
        <div className="box" id="parts">
          <PartsBox vehicle={vehicle} />
        </div>

        <div className="box" id="infos">
          <InfoBox vehicule={vehicle} />
        </div>
        <div className="box" id="map">
          <p>map</p>
        </div>

      </div>
    </div>
  )
}

