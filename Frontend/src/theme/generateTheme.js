import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#ff4d2d" },
          secondary: { main: "#1976d2" },
          background: { default: "#fff", paper: "#f5f5f5" },
          text: { primary: "#000000", secondary: "#555555" },
        }
      : {
          primary: { main: "#ff784e" },
          secondary: { main: "#90caf9" },
          background: { default: "#121212", paper: "#1e1e1e" },
          text: { primary: "#ffffff", secondary: "#bbbbbb" },
        }),
  },
});

export const generateTheme = (mode) => createTheme(getDesignTokens(mode));