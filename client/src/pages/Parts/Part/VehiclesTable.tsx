import { useNavigate } from "react-router";
import { getAllVehicles } from "../../../data/vehicles/vehiclesResponse";
import Vehicle from "../../../../../shared/models/Vehicle";

export const VehiclesTable = ({ vehicles }: { vehicles: Vehicle[] }) => {

  if (!vehicles)
    return <div>No Parts</div> // TODO ERROR Handle

  if (vehicles.length === 0)
    return <div>No Parts corresponding</div> // TODO : ERROR HANDLE

  const navigate = useNavigate();

  return (
      <table className="table" style={{ margin: 0 }}>
        <thead>
          <tr className="table__head">
            <th>Picture</th>
            <th>Name</th>
            <th>Prices</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle:Vehicle) => {
            return (
              <tr onClick={() => navigate('/vehicles/' + vehicle.slug)}>
                <td><img src={vehicle.picture} alt={vehicle.name} /></td>
                <td>{vehicle.name}</td>
                <td>{Number(vehicle.info.prices.buy).toLocaleString()}g</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  )
}

