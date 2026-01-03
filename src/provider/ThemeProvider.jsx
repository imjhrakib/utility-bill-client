import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  console.log(theme);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  const colors = {
    dark: {
      bg: "#17191A",
      text: "#E5E7EB",
      primary: "#438A7A",
    },
    light: {
      bg: "#FFFFFF",
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
