import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F2F2F2",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111517",
      secondary: "#2B3844",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#202C36",
      paper: "#2B3844",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#F2F2F2",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
});
