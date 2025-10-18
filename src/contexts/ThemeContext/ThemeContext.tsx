import React from "react";

interface ThemeContextType {
  theme: "dark" | "light";
  // setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  toggleTheme: () => void;
}

const initialThemeContext: ThemeContextType = {
  theme: (localStorage.getItem("theme") as ThemeContextType["theme"])
    ? (localStorage.getItem("theme") as ThemeContextType["theme"])
    : window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  // setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeContext = React.createContext<ThemeContextType>(initialThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    initialThemeContext.theme
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
