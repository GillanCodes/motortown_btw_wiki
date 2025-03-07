import { NavLink } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

export default function AdminNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <NavLink className="navbar__button" to="/">Home</NavLink>
        <NavLink className="navbar__button" to="/admin">Dashboard</NavLink>
        <ThemeToggle />
      </div>
    </nav>
  )
}

