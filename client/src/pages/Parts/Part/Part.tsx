import "./Part.scss";
import { useParams } from "react-router";
import { getAllParts } from "../../../data/parts/partsResponse";
import PartClass from "../../../../../shared/models/Part.ts";
import { InfoBox } from "./InfoBox.tsx";
import { VehiclesTable } from "./VehiclesTable.tsx";

export default function Part() {
  const { slug } = useParams<{ slug: string }>();
  const parts = getAllParts();

  const partData:PartClass | undefined = parts.find((v: any) => v.slug === slug);

  console.log(partData);
  

  if (!partData) {
    return (
      <div>
        <p>No part found ...</p>
      </div>
    )
  }

  const part:PartClass = new PartClass(partData);

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
          <VehiclesTable slugs={part.vehicles} />          
        </div>

      </div>

    </div>
  )
}

