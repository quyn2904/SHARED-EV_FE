import React from "react";
import { AuthContext } from "./AuthContext";

const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export default useAuthContext;
