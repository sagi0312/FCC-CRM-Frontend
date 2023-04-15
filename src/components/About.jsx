import React from "react";
import useAdmin from "../hooks/AdminContext";

function About() {
  const { sideBar, setSideBar } = useAdmin();
  return (
    <div>
      <button onClick={() => setSideBar((prev) => !prev)}>Set sidebar</button>
      <br />
      <br />
      <p>Sidebar: {sideBar.toString()}</p>
    </div>
  );
}

export default About;
