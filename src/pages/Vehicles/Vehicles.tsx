import './Vehicles.scss';
import { useNavigate } from "react-router";
import { getAllVehicles } from "../../data/vehicles/vehiclesResponse.ts";
import Vehicle from "../../models/Vehicle";

export const Vehicles = () => {

  let navigate = useNavigate();
  const vehicules = getAllVehicles();

  return (
    <div className="container vehicules__container">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Categories</th>
            <th>Prices</th>
          </tr>
        </thead>
        <tbody>
          {vehicules!.map((vehicule:Vehicle, key:number) => {
            return (
              <tr key={key} onClick={() => navigate(`/vehicles/${vehicule.slug}`)}>
                <td><img src={vehicule.picture} alt={vehicule.name} /></td>
                <td>{vehicule.name}</td>
                <td>{vehicule.info.categories.join(', ')}</td>
                <td>{vehicule.info.prices.buy}</td>
              </tr>
            )
          })}
        </tbody>
      </table> 
    </div>
  )
}
