import { useParams } from "react-router";
import vehicules from "../../../data/vehicules.json";
import "./Vehicule.scss";
import { InfoBox } from "./InfoBox";
import { PartsBox } from "./PartsBox";

export default function Vehicule() {

  const { slug } = useParams<{ slug: string }>();

  const vehicule = vehicules.find((v:any) => v.slug === slug);

  if(!vehicule)
  {
    return 'no vehicule';
    // TODO : Error page
  }

  return (
    <div className="container vehicule__container">
      <div className="grid">
          
        <div className="box" id="title">
          <h1>{vehicule.name}</h1>
        </div>
      <div className="box" id="image">
          <img src={vehicule.picture} alt={vehicule.name} />
        </div>
        <div className="box" id="parts">
          <PartsBox vehicle={vehicule} /> 
        </div>

        <div className="box" id="infos">
          <InfoBox vehicule={vehicule} />
        </div>
        <div className="box" id="map">
          <p>map</p>
        </div>

      </div>
    </div>  
  )
}

