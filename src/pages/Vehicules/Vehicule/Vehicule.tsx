import { useParams } from "react-router";
import vehicules from "../../../data/vehicules.json";
import "./Vehicule.scss";
import { Star } from "lucide-react";

export default function Vehicule() {

  const { slug } = useParams<{ slug: string }>();

  const vehicule = vehicules.find((v:any) => v.slug === slug);

  if(!vehicule)
  {
    return 'no vehicule';
    // TODO : Error page
  }

  const stars = [];
  for (let index = 0; index < vehicule.info.confort; index++) {
    stars.push(1); 
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
          <p>Parts</p>
        </div>
        <div className="box" id="infos">
          <div className="box__container">
            <h2>Infos</h2>
            <div className="box__container__content">
              <div className="field">
                <p className="field__title">Categories :</p> 
                <p className="field__content">{vehicule.info.categories.join(',')}</p> 
              </div> 
              <div className="field">
                <p className="field__title">Purpose :</p> 
                <p className="field__content">{vehicule.info.purpose}</p> 
              </div>  
              <div className="field">
                <p className="field__title">Prices :</p> 
                <p className="field__content">{"Buy : " + vehicule.info.prices.buy+"g"} <br /> 
                {"Rent : " +vehicule.info.prices.rent + "g / 10min"}</p> 
              </div>  
              <div className="field">
                <p className="field__title">Confort :</p> 
                <p className="field__content">
                  {stars.map((s:number) => {
                    return (
                      <Star />
                    )
                  })} 
                </p> 
              </div> 
              <div className="field">
                <p className="field__title">Seat{vehicule.info.seat > 1 ? "s" : ""} :</p> 
                <p className="field__content">{vehicule.info.seat}</p> 
              </div> 
              <div className="field">
                <p className="field__title">Wheel{vehicule.info.wheels > 1 ? "s" : ""} :</p> 
                <p className="field__content">{vehicule.info.wheels}</p> 
              </div>
              <div className="field">
                <p className="field__title">PowerTrain</p> 
                <p className="field__content">{vehicule.info.powertrain}</p> 
              </div>
              <div className="field">
                <p className="field__title">Cargo</p> 
                {vehicule.info.cargo ? (
                  <p className="field__content">
                    Type : {vehicule.info.cargo.type} <br />
                    Size : {vehicule.info.cargo.size}{vehicule.info.cargo.unit}
                  </p> 
                ) : (
                  <p>This can not contain any cargo.</p>
                )}
              </div>
            </div>
            {/* <ul>
              <li>Cargo Type : {vehicule.info.cargo.type}</li>
              <li>Cargo : {vehicule.info.cargo.size}{vehicule.info.cargo.unit}</li>
            </ul> */ }
          </div>
        </div>
        <div className="box" id="map">
          <p>map</p>
        </div>

      </div>
    </div>  
  )
}

