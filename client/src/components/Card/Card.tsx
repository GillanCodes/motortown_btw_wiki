import { NavLink } from "react-router";
import "./Card.scss";

type CardProps = {
  title:string,
  link:string,
  picture:string,
}

export const Card = ({title, link, picture}: CardProps) => {
  return (
    <NavLink 
      className="card" 
      to={link}
      style={{
        backgroundImage:`url(${picture})`,
      }}
    >
      <div className="card--content">
        <p className="card--title">{title}</p>
      </div>
    </NavLink>
  )
}
