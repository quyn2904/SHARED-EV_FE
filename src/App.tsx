import React from "react";
import AppRouter from "@/router";
import { AuthProvider } from "@/contexts/AuthContext/AuthContext";
import useThemeContext from "./contexts/ThemeContext/useThemeContext";

function App() {
  const { theme } = useThemeContext();

  React.useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
