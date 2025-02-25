import { NavLink } from "react-router";
import "./Navbar.scss";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <NavLink className="navbar__button" to="/">Home</NavLink>
        <ThemeToggle />
      </div>
    </nav>
  )
}
