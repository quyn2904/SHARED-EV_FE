import React from "react";
import AppRouter from "@/router";
import { AuthProvider } from "@/contexts/AuthContext/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import useThemeContext from "./contexts/ThemeContext/useThemeContext";

function App() {
  const { theme } = useThemeContext();

  React.useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
