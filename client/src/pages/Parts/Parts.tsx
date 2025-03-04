import './parts.scss';
import categoriesJson from "../../data/categories/categories.json";
import { getAllParts } from "../../data/parts/partsResponse";
import { Category, SubCategory } from "../../models/Category";
import Part from "../../models/Part";
import { useNavigate } from 'react-router';

export const Parts = () => {
  const categories: Category[] = categoriesJson;
  const parts: Part[] = getAllParts();

  const navigate = useNavigate();

  return (
    <div className='container parts__container'>
      <h1>Parts</h1>

      {categories.map((cat: Category, key: number) => {

        return (
          <div id={cat.slug} key={key} className="main-category">
            <h2>{cat.name}</h2>

            {cat.sub.map((sub: SubCategory, key: number) => {

              return (
                <div key={key} id={sub.slug} className="sub-category">
                  <h3>{sub.name}</h3>
                  <div className="sub-category__content">
                    <table className="table">
                      <thead>
                        <tr className="table__head">
                          <th>Name</th>
                          <th>Description</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>

                        {parts.filter((part: Part) => part.category.main === cat.slug && part.category.sub === sub.slug).map((part: Part) => {

                          return (
                            <tr key={key} onClick={() => navigate("/parts/" + part.slug)}>
                              <td>{part.name}</td>
                              <td>{part.description}</td>
                              <td>{Number(part.info.price).toLocaleString()}g</td>
                            </tr>
                          )
                        })}

                      </tbody>
                    </table>

                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
