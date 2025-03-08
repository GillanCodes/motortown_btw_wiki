import { useState } from "react"
import "./AddVehicle.scss"
import { isEmpty } from "../../../../../../shared/utils/isEmpty";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../types/dispatch.type";
import { createVehicle } from "../../../../actions/vehicle.action";

const defaultVehicle = {
  name: "",
  slug: "",
  info: {
    categories: "",
    purpose: "",
    confort: 1,
    seats: 2,
    wheels: 4,
    powertrain: "AWD",
    prices: {
      buy: 0,
      rent: 0
    },
    unlock: [],
  }
}

export default function AddVehicle() {

  const dispatch = useDispatch<AppDispatch>()

  const [vehicle, setVehicle] = useState(defaultVehicle)
  const [picture, setPicture] = useState<any>(null);
  const [unlock, setUnlock] = useState({job: "", level: 0});

  const nameHandle = (name:string) => {
    autoSlug(name);
    setVehicle({...vehicle, name:name})
  }

  const autoSlug = (name: string) => {
    var formatedSlug = name.split(' ').join("_").split("'").join("_").split("\"").join("_").toLocaleLowerCase();
    setVehicle({ ...vehicle, slug: formatedSlug })
  }

  const formatCategories = (categories: string) => {
    var formated = categories.split(', ').join(",").split(" ,").join(",");
    setVehicle({ ...vehicle, info: { ...vehicle.info, categories: formated } })
  }

  const addUnlock = () => {
    vehicle.info.unlock.unshift({job:unlock.job, level:unlock.level})
    setUnlock({job: "", level: 0});
  }

  const resetForm = () => {
    //TODO : 
    setVehicle(defaultVehicle);
    setPicture(null);
  }

  const submitForm = () => {
    if (!isEmpty(picture)) return;

    const data = new FormData();
    data.append("name", vehicle.name);
    data.append("slug", vehicle.slug);
    data.append("picture", picture);
    data.append("info", JSON.stringify(vehicle.info));

    dispatch(createVehicle(data)).then(() => {
      resetForm();
    }); 

  }

  return (
    <div className='container' id='vehicle_admin-add'>
      <h1>Add New Vehicle</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="fields">
          <div className="field">
            <label className='label'>Name</label>
            <div className="control">
              <input type="text" className="input" value={vehicle.name} onChange={(e) => nameHandle(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className='label'>slug</label>
            <div className="control">
              <input type="text" className="input" value={vehicle.slug} onChange={(e) => autoSlug(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="field">
          <label className='label'>File</label>
          <div className="control">
            <input type="file" className="input" onChange={(e) => setPicture(e.target.files[0])} />
          </div>
        </div>

        <div className="fields">
          <div className="field">
            <label className='label'>Categories</label>
            <div className="control">
              <input type="text" className="input" value={vehicle.info.categories} onChange={(e) => formatCategories(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className='label'>Purpose</label>
            <div className="control">
              <input type="text" className="input" value={vehicle.info.purpose} onChange={(e) => setVehicle({ ...vehicle, info: { ...vehicle.info, purpose: e.target.value } })} />
            </div>
          </div>
        </div>

        <div className="fields">
          <div className="field">
            <label className='label'>Seats</label>
            <div className="control">
              <input type="number" className="input" value={vehicle.info.seats} onChange={(e) => setVehicle({ ...vehicle, info: { ...vehicle.info, seats: Number(e.target.value) } })} />
            </div>
          </div>
          <div className="field">
            <label className='label'>Wheels</label>
            <div className="control">
              <input type="number" className="input" value={vehicle.info.wheels} onChange={(e) => setVehicle({ ...vehicle, info: { ...vehicle.info, wheels: Number(e.target.value) } })} />
            </div>
          </div>

          <div className="field">
            <label className='label'>Confort</label>
            <div className="control">
              <input type="number" className="input" value={vehicle.info.confort} onChange={(e) => setVehicle({ ...vehicle, info: { ...vehicle.info, confort: Number(e.target.value) } })} />
            </div>
          </div>
          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select onChange={(e) => setVehicle({ ...vehicle, info: { ...vehicle.info, powertrain: e.target.value } })} >
                  <option value="AWD">All Wheel Drive</option>
                  <option value="RWD">Rear Wheel Drive</option>
                  <option value="FWD">Front Wheel Drive</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="fields">
          <div className="field">
            <label className="label">Buy Price</label>
            <div className="control">
              <input type="number" className="input" value={vehicle.info.prices.buy} onChange={(e) => setVehicle({ ...vehicle, info: { ...vehicle.info, prices: { ...vehicle.info.prices, buy: Number(e.target.value) } } })} />
            </div>
          </div>
          <div className="field">
            <label className="label">Rent Price</label>
            <div className="control">
              <input type="number" className="input" value={vehicle.info.prices.rent} onChange={(e) => setVehicle({ ...vehicle, info: { ...vehicle.info, prices: { ...vehicle.info.prices, rent: Number(e.target.value) } } })} />
            </div>
          </div>
        </div>

        <div className="unlocks">
          <table className="table">
            <thead>
              <tr className="table__head">
                <th>Level</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table__no-click">
                <td><input type="number" className="input" value={unlock.level} onChange={(e) => setUnlock({...unlock, level:Number(e.target.value)})} /></td>
                <td><input type="text" className="input" value={unlock.job} onChange={(e) => setUnlock({...unlock, job:e.target.value})}/></td>
                <td><button className="button is-link" onClick={addUnlock}>Add</button></td>
              </tr>
              {vehicle.info.unlock && vehicle.info.unlock.map((unlock: {level:number, job:string}) => {
                return (
                  <tr className="table__no-click">
                    <td>{unlock.level}</td>
                    <td>{unlock.job}</td>
                    <td>
                      <button className="button is-link">Edit</button>
                      <button className="button is-danger">Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="cargo">

        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={submitForm}>Submit</button>
          </div>
          <div className="control">
            <button className="button is-danger" onClick={resetForm}>Cancel</button>
          </div>
        </div>
      </form>

    </div>
  )
}

