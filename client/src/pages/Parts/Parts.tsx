import './parts.scss';
import { getAllParts } from "../../data/parts/partsResponse";
import { useNavigate } from 'react-router';
import Part from '../../../../shared/models/Part';
import { Category, SubCategory } from '../../../../shared/models/Category';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../../../shared/utils/isEmpty';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/dispatch.type';
import { getParts } from '../../actions/part.action';

export const Parts = () => {

  const dispatch = useDispatch<AppDispatch>()

  const categories = useSelector((state:any) => state.CategoryReducer);
  const parts = useSelector((state:any) => state.PartReducer);

  useEffect(() => {
    dispatch(getParts());
  }, [])

  const navigate = useNavigate();

  return (
    <div className='container parts__container'>
      <h1>Parts</h1>

      {!isEmpty(categories) && categories.map((cat: Category, key: number) => {

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

                        {!isEmpty(parts) && parts.filter((part: Part) => part.category.main === cat.slug && part.category.sub === sub.slug).map((part: Part) => {

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
