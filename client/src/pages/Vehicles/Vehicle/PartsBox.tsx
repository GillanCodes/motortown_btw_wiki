import { Dropdown } from "../../../components/Dropdown/Dropdown"
import Vehicle from "../../../../../shared/models/Vehicle";

import categoriesJson from "../../../data/categories/categories.json";
import { Category, SubCategory } from "../../../../../shared/models/Category";
import { PartsTable } from "./PartsTable";

export const PartsBox = ({ vehicle }: { vehicle?: Vehicle }) => {

  const categories:Category[] | undefined = categoriesJson;

  if (!categories)
    return <div>No cat</div> // TODO : Handle error

  return (
    <div className="box__container">
      {categories.map((cat:Category, key:number) => {
        return (
          <div key={key}>
            <p>{cat.name}</p>
            {cat.sub.map((sub:SubCategory, key:number) => {
              return (
                <Dropdown title={sub.name} content={<PartsTable slugs={vehicle!.parts} sub={sub.slug} key={key} />} />
              )
            })}
          </div>
        )
      })}
    </div >
  )
}
