import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./MovieCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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

const TrendingNow = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/all/week").then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const handleScrollLeft = () => {
    document.getElementById("trending-cont").scrollLeft += Math.min(
      document.body.clientWidth * 0.9,
      500
    );
  };

  const handleScrollRight = () => {
    document.getElementById("trending-cont").scrollLeft -= Math.min(
      document.body.clientWidth * 0.9,
      500
    );
  };

  return (
    <Container maxWidth="lg" sx={{ p: 0 }}>
      <Typography variant="h4" sx={{ m: 2 }} className="oswald-600">
        Trending Now
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
            overflowX: "scroll",
            display: "flex",
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            my: 2,
            px: 3,
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
              pl: 1,
            }}
          >
            <IconButton
              sx={{ height: "100%", color: "primary.contrastText", px: 2 }}
              onClick={handleScrollRight}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>
          {movies.map((movie) => (
            <Movie key={movie.id} marg={2} movie={movie} />
          ))}
          <Box
            className="overlay-button"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              pl: 1,
            }}
          >
            <IconButton
              sx={{
                height: "100%",
                color: "primary.contrastText",
                px: 2,
              }}
              onClick={handleScrollLeft}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default TrendingNow;
