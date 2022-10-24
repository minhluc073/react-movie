import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./MovieCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MovieCardSkeleton from "./MovieCardSkeleton";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing")
      .then(async (res) => {
        setMovies(res.data.results);
        await sleep(500);
        setLoading(false);
      });
  }, []);

  const handleScrollLeft = () => {
    document.getElementById("nowplaying-cont").scrollLeft += Math.min(
      document.body.clientWidth * 0.9,
      500
    );
  };

  const handleScrollRight = () => {
    document.getElementById("nowplaying-cont").scrollLeft -= Math.min(
      document.body.clientWidth * 0.9,
      500
    );
  };

  const toLoad = () => {
    if (loading)
      return [...Array(20)].map((item, index) => (
        <MovieCardSkeleton key={`nowPlayingPreLoadSkelton_${index}`} marg={2} />
      ));
    else
      return movies.map((movie) => (
        <Movie key={movie.id} marg={2} movie={movie} />
      ));
  };

  return (
    <Container maxWidth="lg" sx={{ p: 0, mt: 5 }}>
      <Typography variant="h4" sx={{ m: 2 }} className="oswald-500">
        Currently Playing
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
          id="nowplaying-cont"
          className="noscrollbar"
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
              sx={{
                height: "100%",
                color: "primary.contrastText",
                px: { xs: 1, sm: 2, md: 3 },
              }}
              onClick={handleScrollRight}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>
          {toLoad()}
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
                px: { xs: 1, sm: 2, md: 3 },
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

export default NowPlaying;
