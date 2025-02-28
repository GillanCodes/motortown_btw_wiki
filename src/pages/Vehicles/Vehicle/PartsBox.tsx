import { Dropdown } from "../../../components/Dropdown/Dropdown"
import Part from "../../../models/Part";
import Vehicle from "../../../models/Vehicle";

const Table = ({ part }: { part?: Part }) => {
  return (
    <div>
      <table className="table" style={{ margin: 0 }}>
        <thead>
          <tr className="table__head">
            <th>name</th>
            <th>mass</th>
            <th>prices</th>
            <th>betterment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>V8 440HP</td>
            <td>750 KG</td>
            <td>{Number(80000).toLocaleString()}</td>
            <td>440HP</td>
          </tr>
          <tr>
            <td>V8 240HP</td>
            <td>450 KG</td>
            <td>{Number(40000).toLocaleString()}</td>
            <td>240HP</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export const PartsBox = ({ vehicle }: { vehicle?: Vehicle }) => {
  return (
    <div className="box__container">
      <Dropdown content={<Table />} title="Engine" />
      <Dropdown content={<Table />} title="Others" />
    </div >
  )
}
