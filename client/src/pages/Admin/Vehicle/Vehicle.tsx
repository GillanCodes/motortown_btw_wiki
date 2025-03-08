import "./Vehicle.scss";
import { useNavigate } from "react-router";
import VehicleClass from "../../../../../shared/models/Vehicle";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../types/dispatch.type.ts';
import { getVehicles } from '../../../actions/vehicle.action.ts';
import { useSelector } from 'react-redux';
import { isEmpty } from "../../../../../shared/utils/isEmpty.ts";

export default function Vehicle() {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState(true);
  const vehicles = useSelector((state: any) => state.VehicleReducer);

  let navigate = useNavigate();


  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch])

  useEffect(() => {
    console.log(vehicles)
    if (isEmpty(vehicles)) setLoading(true);
    else setLoading(false);
  }, [vehicles])

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className="container" id="vehicle_admin">
      <div className="content">
        <h1>Vehicle List</h1>
        <table className='table'>
          <thead>
            <tr className='table__head'>
              <th>image</th>
              <th>name</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => navigate('/admin/vehicle/add')}>
              <td></td>
              <td>New Vehicle</td>
              <td>Click to add a vehicle</td>
            </tr>
            {vehicles!.map((vehicle: VehicleClass, key: number) => {
              return (
                <tr key={key} className="table__no-click">
                  <td><img src={vehicle.picture} alt={vehicle.name} /></td>
                  <td>{vehicle.name}</td>
                  <td>
                    <div>
                      <button className="button is-info" onClick={() => navigate('/admin/vehicle/edit/' + vehicle.slug)}>Edit</button>
                      <button className="button is-danger">Delete</button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

