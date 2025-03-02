import { useParams } from "react-router";
import { getAllParts } from "../../../data/parts/partsResponse";
import PartClass from "../../../models/Part.ts";

export default function Part() {
  const { slug } = useParams<{ slug: string }>();
  const parts = getAllParts();

  const partData:PartClass | undefined = parts.find((v: any) => v.slug === slug);

  if (!partData) {
    return (
      <div>
        <p>No part found ...</p>
      </div>
    )
  }

  const part:PartClass = new PartClass(partData);

  return (
    <div className="container part_container">
      <div className="grid">

        <div id="title">
          {part.name}
        </div>
        <div id="info">
          <div className="field">
            <p className="field__title">Description</p>
            <p className="field__content">{part.description}</p>
          </div>
        </div>
        <div id="vehicles">

        </div>

      </div>

    </div>
  )
}

