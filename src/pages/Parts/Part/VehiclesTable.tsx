import { useNavigate } from "react-router";
import { getAllVehicles } from "../../../data/vehicles/vehiclesResponse";
import Vehicle from "../../../models/Vehicle";

export const VehiclesTable = ({ slugs }: { slugs: string[] }) => {

  if (!slugs) return;

  const allVehicles: Vehicle[] | undefined = getAllVehicles();

  if (!allVehicles)
    return <div>No Parts</div> // TODO ERROR Handle

  const vehicles:Vehicle[] | undefined = allVehicles.filter((vehicle:Vehicle) => slugs.includes(vehicle.slug));

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

