import categoriesJson from "../../data/categories/categories.json";
import { getAllParts } from "../../data/parts/partsResponse";
import { Category, SubCategory } from "../../models/Category";
import Part from "../../models/Part";

export const Parts = () => {

  const categories:Category[] = categoriesJson;
  const parts:Part[] = getAllParts();
  
  console.log(parts);
  console.log(parts.filter((part:Part) => part.category.main === "powertrain"));
  
  
  
  return (
    <div className='container parts__container'>
      <h1>Parts</h1> 

      <div>
        {categories.map((cat:Category, key:number) => {
          return (
            <div id={cat.slug} key={key}>
              <h2>{cat.name}</h2>
              {cat.sub.map((sub:SubCategory, key:number) => {
                return (
                  <div key={key} id={sub.slug}>
                    <h3>{sub.name}</h3>
                    {parts.filter((part:Part) => part.category.main === cat.slug && part.category.sub === sub.slug).map((part:Part) => {
                      return (
                        <div>
                          <p>{part.name}</p>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
