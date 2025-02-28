import './Vehicles.scss';
import { useNavigate } from "react-router";
import { getAllVehicles } from "../../data/vehicles/vehiclesResponse.ts";
import Vehicle from "../../models/Vehicle";

export const Vehicles = () => {

  let navigate = useNavigate();
  const vehicles = getAllVehicles();

  return (
    <div className="container vehicules__container">
      <table>
        <thead>
          <tr>
            <th>image</th>
          <th>name</th>
            <th>categories</th>
            <th>prices</th>
          </tr>
        </thead>
        <tbody>
          {vehicles!.map((vehicle:Vehicle, key:number) => {
            return (
              <tr key={key} onClick={() => navigate(`/vehicles/${vehicle.slug}`)}>
                <td><img src={vehicle.picture} alt={vehicle.name} /></td>
                <td>{vehicle.name}</td>
                <td>{vehicle.info.categories.join(', ')}</td>
                <td>{vehicle.info.prices.buy}</td>
              </tr>
            )
          })}
        </tbody>
      </table> 
    </div>
  )
}
