import React from "react";
import useTheme from "../hooks/ThemeContext";

function Contact() {
  const { theme } = useTheme();
  return <div>{theme}</div>;
}

export default Contact;
