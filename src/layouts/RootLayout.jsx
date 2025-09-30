import { Outlet } from "react-router-dom";
import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import { lightTheme, darkTheme } from "../Theme";

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar darkMode={darkMode} onThemeToggle={handleThemeToggle} />

      <Outlet />
    </ThemeProvider>
  );
}
