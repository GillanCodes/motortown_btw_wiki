import { Moon, Sun } from 'lucide-react';
import { useState } from 'react'

export const ThemeToggle = () => {

  const [currentTheme, setCurrentTheme] = useState(document.documentElement.getAttribute("data-theme"));

  const themeHandler = () => {
    var theme = document.documentElement.getAttribute('data-theme');
    switch (theme)
    {
      case "light":
        document.documentElement.setAttribute("data-theme", "dark");
        return setCurrentTheme("dark");
      default:
        document.documentElement.setAttribute("data-theme", "light");
        setCurrentTheme("light");
        break;
    }

  }

  return (
    <p 
      id="theme_toggle"
      className="navbar__button"
      onClick={themeHandler}
    >
      {currentTheme === "dark" ? <Moon /> : <Sun /> }
    </p>
  )
}
