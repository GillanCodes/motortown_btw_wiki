import { Star } from "lucide-react";
import Vehicle from "../../../models/Vehicule";

export const InfoBox = ({vehicule}: {vehicule: Vehicle}) => {

  const stars = [];
  for (let index = 0; index < vehicule.info.confort; index++) {
    stars.push(1); 
  }

  return (
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
          <p className="field__content">
            <span>Buy {Number(vehicule.info.prices.buy).toLocaleString()}g</span>
            <span>Rent {Number(vehicule.info.prices.rent).toLocaleString()}g/10min</span>
          </p>
        </div>
        <div className="field">
          <p className="field__title">Confort :</p>
          <p className="field__content">
            {stars.map((_s: number, key:number) => {
              return (
                <Star key={key} />
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
            <p className="field__content">
              {vehicule.info.cargo ? (
              <>
                Type : {vehicule.info.cargo.type} <br />
                Size : {vehicule.info.cargo.size}{vehicule.info.cargo.unit}
              </>
              ): (
                <>This can not contain any cargo.</>
              )}
            </p>
        </div>
      </div>
    </div>

  )
}
