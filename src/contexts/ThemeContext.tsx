import { createContext, useState, useContext, type ReactNode } from "react";


// type for theme
type Theme = "light" | "dark";

//ThemeContextType 
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// ThemeContext 
const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// ThemeProvider
function ThemeProvider({ children }: { children: ReactNode }) {
  // theme state
  const [theme, setTheme] = useState<Theme>("light");

  // toggleTheme function
  const toggleTheme = () => {
    setTheme((previousTheme) => 
      previousTheme === "light" ? "dark" : "light"
    );
  };

  // theme and toggleTheme in object for shared Context 
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hooks ThemeContext
function useTheme() {
  const context = useContext(ThemeContext);

  // error
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

export { ThemeProvider };
export { useTheme };