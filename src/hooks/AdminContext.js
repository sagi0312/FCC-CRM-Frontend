import React, { useState, createContext, useContext } from "react";

const initialState = {
  sideBar: false,
  setSideBar: () => {},
};

const AdminContext = createContext(initialState);

export const AdminProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <AdminContext.Provider value={{ sideBar, setSideBar }}>
      {children}
    </AdminContext.Provider>
  );
};

const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error(
      "useAdminContext must be used within a AdminContextProvider"
    );
  }
  return context;
};

export default useAdmin;
