import React from "react";
import useTheme from "../hooks/ThemeContext";

function About() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme("Sunset")}>Sunset</button>
      <button onClick={() => setTheme("Rainclouds")}>Rainclouds</button>
      <br />
      <br />
      <p>{theme}</p>
    </div>
  );
}

export default About;
