import { useParams } from "react-router";
import "./Vehicle.scss";
import { InfoBox } from "./InfoBox";
import { PartsBox } from "./PartsBox";
import Vehicle from "../../../models/Vehicle";
import { getAllVehicles } from "../../../data/vehicles/vehiclesResponse";

export default function Vehicule() {

  const { slug } = useParams<{ slug: string }>();
  const vehicles:Vehicle[] | undefined = getAllVehicles();

  const vehicleData:Vehicle | undefined = vehicles.find((v: any) => v.slug === slug)

  if (!vehicleData) {
    return 'no vehicule';
    // TODO : Error page
  }

  const vehicle:Vehicle = new Vehicle(vehicleData);

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

