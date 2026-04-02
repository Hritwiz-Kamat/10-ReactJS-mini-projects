import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  // creating the context
  themeMode: "light", // default theme
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; // making everyone aware context exists

export default function useTheme() {
  // this helps everyone to use context or store
  // this is a CUSTOM HOOK
  return useContext(ThemeContext);
}
