import { useNavigate } from "react-router";
import vehicules from "../../data/vehicules.json";
import './Vehicules.scss';

export const Vehicules = () => {

  let navigate = useNavigate();

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
          {vehicules.map((vehicule, key) => {
            return (
              <tr key={key} onClick={() => navigate(`/vehicules/${vehicule.slug}`)}>
                <td><img src={vehicule.picture} alt={vehicule.name} /></td>
                <td>{vehicule.name}</td>
                <td>{vehicule.categories[0]}</td>
                <td>{vehicule.prices.buy}</td>
              </tr>
            )
          })}
        </tbody>
      </table> 
    </div>
  )
}
