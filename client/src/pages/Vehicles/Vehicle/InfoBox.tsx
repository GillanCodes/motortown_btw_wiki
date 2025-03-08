import { Star } from "lucide-react";
import Vehicle from "../../../../../shared/models/Vehicle";

export const InfoBox = ({ vehicle }: { vehicle: Vehicle }) => {

  const stars = [];
  for (let index = 0; index < vehicle.info.confort; index++) {
    stars.push(1);
  }

  return (
    <div className="box__container">
      <h2>Infos</h2>
      <div className="box__container__content">
        <div className="field">
          <p className="field__title">Categories :</p>
          <p className="field__content">{vehicle.info.categories.join(',')}</p>
        </div>
        <div className="field">
          <p className="field__title">Purpose :</p>
          <p className="field__content">{vehicle.info.purpose}</p>
        </div>
        <div className="field">
          <p className="field__title">Prices :</p>
          <p className="field__content">
            <span>Buy {Number(vehicle.info.prices.buy).toLocaleString()}g</span>
            <span>Rent {Number(vehicle.info.prices.rent).toLocaleString()}g/10min</span>
          </p>
        </div>
        <div className="field">
          <p className="field__title">Confort :</p>
          <p className="field__content" style={{ flexDirection: "row", justifyContent: "center" }}>
            {stars.map((_s: number, key: number) => {
              return (
                <Star key={key} />
              )
            })}
          </p>
        </div>
        <div className="field">
          <p className="field__title">Seat{vehicle.info.seats > 1 ? "s" : ""} :</p>
          <p className="field__content">{vehicle.info.seats}</p>
        </div>
        <div className="field">
          <p className="field__title">Wheel{vehicle.info.wheels > 1 ? "s" : ""} :</p>
          <p className="field__content">{vehicle.info.wheels}</p>
        </div>
        <div className="field">
          <p className="field__title">PowerTrain</p>
          <p className="field__content">{vehicle.info.powertrain}</p>
        </div>
        <div className="field">
          <p className="field__title">Unlock</p>
          <p className="field__content">
            {vehicle.info.unlock && vehicle.info.unlock.map((unlock: {level:number, job:string}) => {
              return (
                <p>{unlock.job} at level {unlock.level}</p>
              )
            })}
          </p>
        </div>
        <div className="field">
          <p className="field__title">Cargo</p>
          <p className="field__content">
            {vehicle.info.cargo ? (
              <>
                Type : {vehicle.info.cargo.type} <br />
                Size : {vehicle.info.cargo.size}{vehicle.info.cargo.unit}
              </>
            ) : (
              <>This can not contain any cargo.</>
            )}
          </p>
        </div>
      </div>

    </div>

  )
}
