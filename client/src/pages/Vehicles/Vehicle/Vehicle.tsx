import { useParams } from "react-router";
import "./Vehicle.scss";
import { InfoBox } from "./InfoBox";
import { PartsBox } from "./PartsBox";
import VehicleClass from "../../../../../shared/models/Vehicle.ts";
import { getAllVehicles } from "../../../data/vehicles/vehiclesResponse";

export default function Vehicle() {

  const { slug } = useParams<{ slug: string }>();
  const vehicles:VehicleClass[] | undefined = getAllVehicles();

  const vehicleData:VehicleClass | undefined = vehicles.find((v: any) => v.slug === slug)

  if (!vehicleData) {
    return 'no vehicule';
    // TODO : Error page
  }

  const vehicle:VehicleClass = new VehicleClass(vehicleData);
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

