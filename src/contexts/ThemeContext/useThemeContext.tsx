import React from "react";
import { ThemeContext } from "./ThemeContext";

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export default useThemeContext;
