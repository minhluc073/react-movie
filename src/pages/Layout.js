import { createTheme, CssBaseline ,ThemeProvider} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

const theme = createTheme({
  palette: {
    primary: {
      light: "#a5c9ca",
      main: "#256D85",
      dark: "#06283D",
      contrastText: "#DFF6FF",
    },
    secondary: {
      light: "#EDEDED",
      main: "#D8D9CF",
      dark: "#1A374D",
      contrastText: "rgba(255,255,255,0.9)",
    },
  },
});

const Layout = () => {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
      <TopBar />
      <Outlet/>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
