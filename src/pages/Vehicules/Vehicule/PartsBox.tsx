import { Dropdown } from "../../../components/Dropdown/Dropdown"

export const PartsBox = ({vehicle: any}) => {
  return (
    <div className="box__container">
      <Dropdown content={"oui"} title="Engines" /> 
    </div>
  )
}
