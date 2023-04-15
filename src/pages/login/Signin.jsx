import React, { useState } from "react";
import Login from "./Login";
import PasswordReset from "./PasswordReset";

const Signin = () => {
  const [formToLoad, setFormToLoad] = useState("login");
  const handleFormLoad = (formType) => {
    setFormToLoad(formType);
  };
  return (
    <div>
      {formToLoad === "login" && <Login handleFormLoad={handleFormLoad} />}
      {formToLoad === "passwordReset" && (
        <PasswordReset handleFormLoad={handleFormLoad} />
      )}
    </div>
  );
};

export default Signin;
