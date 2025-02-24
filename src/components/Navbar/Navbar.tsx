import "./Navbar.scss";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <a href="" className="navbar__button">Home</a> 
        <ThemeToggle />
      </div>
    </nav>
  )
}
