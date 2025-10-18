import AppRouter from "@/router";
import { AuthProvider } from "@/contexts/AuthContext/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext/ThemeContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
