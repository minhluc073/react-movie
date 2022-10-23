import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import TopBar from "./components/TopBar";
import TrendingNow from "./components/TrendingNow";
import axios from "axios";

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

const TMDB_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2VlZWNhMzNlMjlkZDFjNTQwNzU0ZjQ2MDI0MjBkYiIsInN1YiI6IjYzNTNiMzgyNTZiOWY3MDA3ZTJlZDc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-28aCsl_Dpfh7RyYzJLehXZxWbIvWfUYQnCJwqACmE";
axios.defaults.headers.common["Authorization"] = `Bearer ${TMDB_API_TOKEN}`;
axios.defaults.headers.get["Content-Type"] = "application/json";

function App() {
  const [showSearch, setShowSearch] = useState({ show: false, query: "" });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />

        {showSearch.show ? (
          <SearchResult search={showSearch.query}/>
        ) : (
          <>
            <Header
              setSearch={(query) =>
                setShowSearch((prev) => ({ ...prev, show: true, query: query }))
              }
            />
            <TrendingNow />
          </>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
