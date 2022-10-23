import { Box,  Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./MovieCard";
import { FcNext } from "react-icons/fc";

const TMDB_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2VlZWNhMzNlMjlkZDFjNTQwNzU0ZjQ2MDI0MjBkYiIsInN1YiI6IjYzNTNiMzgyNTZiOWY3MDA3ZTJlZDc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-28aCsl_Dpfh7RyYzJLehXZxWbIvWfUYQnCJwqACmE";

// const trends = [
//   "Halloween Ends",
//   "Black Adam",
//   "Bullet Train",
//   "The School for Good and Evil",
//   "Werewolf by Night",
//   "Top Gun: Maverick",
//   "Thor: Love and Thunder",
//   "Spider-Man: No Way Home",
//   "Hocus Pocus 2",
//   "Hellraiser",
//   "Rosaline",
//   "The Stranger",
// ];

const Trending = () => {
  const [movies, setMovies] = useState([]);

  axios.defaults.headers.common["Authorization"] = `Bearer ${TMDB_API_TOKEN}`;
  axios.defaults.headers.get["Content-Type"] = "application/json";
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/all/week").then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const handleScrollLeft = () => {
    document.getElementById("trending-cont").scrollLeft += Math.min(
      document.body.clientWidth / 2,
      500
    );
  };

  const handleScrollRight = () => {
    document.getElementById("trending-cont").scrollLeft -= Math.min(
      document.body.clientWidth / 2,
      500
    );
  };

  return (
    <Container maxWidth="lg" sx={{ p: 0 }}>
      <Typography variant="h3" sx={{ m: 2 }} className="oswald-600">
        Trending Movies
      </Typography>
      <Container
        sx={{
          width: "100%",
          position: "relative",
          p: "0 !important",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflow: "auto",
            display: "flex",
            scrollBehavior: "smooth",
            my: 2,
          }}
          id="trending-cont"
        >
          <Box
            className="overlay-button"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              transform: "rotate(180deg)",
            }}
          >
            <IconButton
              sx={{ height: "100%", px: 2 }}
              onClick={handleScrollRight}
            >
              <FcNext />
            </IconButton>
          </Box>
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
          <Box
            className="overlay-button"
            sx={{ position: "absolute", top: 0, right: 0, height: "100%" }}
          >
            <IconButton
              sx={{
                height: "100%",
                px: 2,
              }}
              onClick={handleScrollLeft}
            >
              <FcNext />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Trending;
