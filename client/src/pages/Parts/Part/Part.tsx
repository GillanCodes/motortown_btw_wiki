import "./Part.scss";
import { useParams } from "react-router";
import PartClass from "../../../../../shared/models/Part.ts";
import { InfoBox } from "./InfoBox.tsx";
import { VehiclesTable } from "./VehiclesTable.tsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../types/dispatch.type.ts";
import { useEffect, useState } from "react";
import { getPart, getParts } from "../../../actions/part.action.ts";
import { isEmpty } from "../../../../../shared/utils/isEmpty.ts";

export default function Part() {

  const dispatch = useDispatch<AppDispatch>()
  const { slug } = useParams<{ slug: string }>();

  const [partData, setPartData] = useState();

  useEffect(() => {
    const getItem = async () => {
      try {
        const data: any = await dispatch(getPart(slug!));
        setPartData(data)
      } catch (error) {
        console.log(error);
      }
    }

    getItem();
  }, [])

  if (isEmpty(partData)) {
    return (
      <div>
        <p>No part found ...</p>
      </div>
    )
  }

  const part: PartClass = new PartClass(partData);

  return (
    <div className="container part__container">
      <div className="grid">

        <div className="box" id="title">
          {part.name}
        </div>
        <div className="box" id="infos">
          <InfoBox part={part} />
        </div>
        <div className="box" id="vehicles">
          <h2>Vehicles :</h2>
          <VehiclesTable vehicles={part.vehicles} />
        </div>

      </div>

    </div>
  )
}

