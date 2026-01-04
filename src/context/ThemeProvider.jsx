import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const colors = {
    dark: {
      bg: "#1F2225",
      bgNav: "#0F0F12",
      text: "#E5E7EB",
      primary: "#438A7A",
    },
    light: {
      bg: "#FFFFFF",
      bgNav: "#F3F4F6",
      text: "#000000",
      primary: "#438A7A",
    },
  };

  useEffect(() => {
    document.body.style.backgroundColor = colors[theme].bg;
    document.body.style.color = colors[theme].text;
  }, [theme]);

  return (
    <ThemeContext value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext>
  );
};

export default ThemeProvider;
