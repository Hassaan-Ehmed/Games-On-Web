import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App.js";
import "./index.css";
import { createTheme } from "@mui/material/styles";
// import {green} from '@mui/material/colors'
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#107C10",
    },
    secondary: {
      main: "#000",
    },
  },


  typography: {
    allVariants: {
      accentColor: "#000",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
</ ThemeProvider >
  </React.StrictMode>
);


