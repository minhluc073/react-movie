import { Container } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header";
import NowPlaying from "./components/NowPlaying";
import Popular from "./components/Popular";
import SearchResult from "./components/SearchResult";
import TopRated from "./components/TopRated";

function HomePage() {
  const [showSearch, setShowSearch] = useState({
    show: false,
    change: 0,
    query: "",
  });

  return (
    <div className="App">
      <Header
        setSearch={(query, show) =>
          setShowSearch((prev) => ({
            ...prev,
            show: show,
            query: query,
          }))
        }
      />
      {showSearch.show ? (
        <SearchResult search={showSearch.query} />
      ) : (
        <Container
          sx={{
            p: 0,
            borderTopLeftRadius: "20px !important",
            borderTopRightRadius: "20px !important",
            height: "100%",
            pt: "0.2rem",
            bgcolor: "primary.light",
            position: "relative",
            top: "-2rem",
            pb: "2rem",
            display: "block",
            boxShadow: "0px -22px 15px -13px rgba(0,0,0,0.4)!important",
          }}
        >
          <Popular />
          <NowPlaying />
          <TopRated />
        </Container>
      )}
    </div>
  );
}

export default HomePage;
