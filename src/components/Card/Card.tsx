import { NavLink } from "react-router";
import "./Card.scss";

type CardProps = {
  title:string,
  link:string
}

export const Card = ({title, link}: CardProps) => {
  return (
    <NavLink className="card" to={link}>
      <div className="card--content">
        <p className="card--title">{title}</p>
      </div>
    </NavLink>
  )
}
