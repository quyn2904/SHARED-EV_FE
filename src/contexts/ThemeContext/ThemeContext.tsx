import React from "react";

interface ThemeContextType {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const initialThemeContext: ThemeContextType = {
  theme: (localStorage.getItem("theme") as ThemeContextType["theme"])
    ? (localStorage.getItem("theme") as ThemeContextType["theme"])
    : window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  setTheme: () => null,
};

const ThemeContext = React.createContext<ThemeContextType>(initialThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    initialThemeContext.theme
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
