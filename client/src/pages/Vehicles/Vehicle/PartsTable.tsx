import { useNavigate } from "react-router";
import { getAllParts } from "../../../data/parts/partsResponse"
import Part from "../../../../../shared/models/Part"

export const PartsTable = ({ parts, sub }: { parts: Part[] | undefined, sub:string }) => {
  
  if (!parts)
    return <div>No Parts</div> // TODO ERROR Handle

  const filteredParts: Part[] | undefined = parts.filter((part: Part) => part.category.sub === sub);

  if (parts.length === 0)
    return <div>No Parts corresponding</div> // TODO : ERROR HANDLE

  const navigate = useNavigate();

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
          {filteredParts.map((part:Part, key:number) => {
            return (
              <tr onClick={() => navigate('/parts/' + part.slug)} key={key}>
                <td>{part.name}</td>
                <td>{part.info.mass}</td>
                <td>{part.info.price}</td>
                {part.info.betterment ? <td>{part.info.betterment.size}{part.info.betterment.unit}</td> : <td>None</td>}
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

