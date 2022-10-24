import {  useState } from "react";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import TrendingNow from "./components/TrendingNow";
import axios from "axios";

const TMDB_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2VlZWNhMzNlMjlkZDFjNTQwNzU0ZjQ2MDI0MjBkYiIsInN1YiI6IjYzNTNiMzgyNTZiOWY3MDA3ZTJlZDc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-28aCsl_Dpfh7RyYzJLehXZxWbIvWfUYQnCJwqACmE";
axios.defaults.headers.common["Authorization"] = `Bearer ${TMDB_API_TOKEN}`;
axios.defaults.headers.get["Content-Type"] = "application/json";

function App() {
  const [showSearch, setShowSearch] = useState({
    show: false,
    change: 0,
    query: "",
  });

  return (
    <div className="App">
      <Header
        setSearch={(query, changed = false) =>
          setShowSearch((prev) => ({
            ...prev,
            show: true,
            query: query,
            change: changed
              ? showSearch.change === 1
                ? 0
                : 1
              : showSearch.change,
          }))
        }
        height={showSearch.show ? 1 : 0}
      />
      {showSearch.show ? (
        <SearchResult search={showSearch.query} change={showSearch.change} />
      ) : (
        <>
          <TrendingNow />
        </>
      )}
    </div>
  );
}

export default App;
