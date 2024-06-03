import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "https://gogrocery-backend.onrender.com";

  const [token, setToken] = useState("");
  const [editForm, setEditForm] = useState(false);

  const contextValue = {
    url,
    token,
    setToken,
    editForm,
    setEditForm,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
