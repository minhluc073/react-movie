import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import TopBar from "./components/TopBar";

const theme = createTheme({
  palette: {
    primary: {
      light: "#A5C9CA",
      main: "#395B64",
      dark: "#2C3333",
      contrastText: "#E7F6F2",
    },
    secondary: {
      light: "#6998AB",
      main: "#406882",
      dark: "#1A374D",
      contrastText: "rgba(255,255,255,0.9)",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
