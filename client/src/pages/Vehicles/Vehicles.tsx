import './Vehicles.scss';
import { useNavigate } from "react-router";
import { getAllVehicles } from "../../data/vehicles/vehiclesResponse.ts";
import Vehicle from "../../../../shared/models/Vehicle.ts";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/dispatch.type.ts';
import { getVehicles } from '../../actions/vehicle.action.ts';
import { useSelector } from 'react-redux';
import { isEmpty } from "../../../../shared/utils/isEmpty.ts";

export const Vehicles = () => {

  const dispatch = useDispatch<AppDispatch>();
  
  const [loading, setLoading] = useState(true);
  const vehicles = useSelector((state:any) => state.VehicleReducer);

  let navigate = useNavigate();
  

  useEffect(() => {
    dispatch(getVehicles()); 
  }, [dispatch])

  useEffect(() => {
    console.log(vehicles)
    if (isEmpty(vehicles)) setLoading(true);
    else setLoading(false);
  }, [vehicles])

  if (loading)
  {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className="container vehicules__container">
      <table className='table'>
        <thead>
          <tr className='table__head'>
            <th>image</th>
            <th>name</th>
            <th>categories</th>
            <th>prices</th>
          </tr>
        </thead>
        <tbody>
          {vehicles!.map((vehicle: Vehicle, key: number) => {
            return (
              <tr key={key} onClick={() => navigate(`/vehicles/${vehicle.slug}`)}>
                <td><img src={vehicle.picture} alt={vehicle.name} /></td>
                <td>{vehicle.name}</td>
                <td>{vehicle.info.categories.join(', ')}</td>
                <td>{vehicle.info.prices ? vehicle.info.prices.buy : "NaN"}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
