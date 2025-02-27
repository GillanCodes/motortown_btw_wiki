import { useParams } from "react-router";
import vehicles from "../../../data/vehicles.json";
import "./Vehicle.scss";
import { InfoBox } from "./InfoBox";
import { PartsBox } from "./PartsBox";
import Vehicle from "../../../models/Vehicle";

export default function Vehicule() {

  const { slug } = useParams<{ slug: string }>();

  const vehicle = new Vehicle(vehicles.find((v:any) => v.slug === slug));

  if(!vehicle)
  {
    return 'no vehicule';
    // TODO : Error page
  }

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

