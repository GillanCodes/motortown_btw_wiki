import { useNavigate } from "react-router";
import { getAllParts } from "../../../data/parts/partsResponse"
import Part from "../../../../../shared/models/Part"

export const PartsTable = ({ slugs, sub }: { slugs: string[], sub:string }) => {

  const allParts: Part[] | undefined = getAllParts();

  if (!allParts)
    return <div>No Parts</div> // TODO ERROR Handle

  const parts: Part[] | undefined = allParts.filter((part: Part) => slugs.includes(part.slug) && part.category.sub === sub);

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
          {parts.map((part:Part) => {
            return (
              <tr onClick={() => navigate('/parts/' + part.slug)}>
                <td>{part.name}</td>
                <td>{part.info.mass}</td>
                <td>{part.info.price}</td>
                <td>{part.info.betterment.size}{part.info.betterment.unit}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

