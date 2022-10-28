import {
  Alert,
  Box,
  Container,
  Fade,
  IconButton,
  Snackbar,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./MovieCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MovieCardSkeleton from "../ComponentSkeltons/MovieCardSkeleton";
import { RiTvFill, RiTvLine } from "react-icons/ri";
import { MdLocalMovies, MdOutlineLocalMovies } from "react-icons/md";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("movie");
    const [alert, setAlert] = useState({
      open: false,
      type: "info",
      message: "Loading contents",
    });

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setAlert((prev) => ({ ...prev, open: false }));
    };
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${
          type === "movie" ? "now_playing" : "on_the_air"
        }`
      )
      .then(async (res) => {
        setMovies(res.data.results);
        await sleep(1000);
        setLoading(false);
      })
      .catch(() => {
        setAlert({ open: true, message: "Failed to load!", type: "error" });
      });
  }, [type,setAlert]);

  const handleScrollLeft = () => {
    document.getElementById("nowplaying-cont").scrollLeft += Math.min(
      document.body.clientWidth * 0.6,
      500
    );
  };

  const handleScrollRight = () => {
    document.getElementById("nowplaying-cont").scrollLeft -= Math.min(
      document.body.clientWidth * 0.6,
      500
    );
  };

  const handleTypeChange = (e) => {
    setType(e.target.checked ? "tv" : "movie");
  };

  const toLoad = () => {
    if (loading)
      return [...Array(20)].map((item, index) => (
        <MovieCardSkeleton key={`NowPlayingPreLoadSkelton_${index}`} marg={2} />
      ));
    else if (movies.length > 0)
      return movies.map((movie) => (
        <Movie key={movie.id} marg={2} movie={movie} />
      ));
  };

  return (
    <Container maxWidth="lg" sx={{ p: 0, mt: 3 }}>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.8rem", md: "2.125rem" },
            mx: 2,
            mt: 1,
            mb: 0,
            flexGrow: 1,
          }}
          className="oswald-500"
        >
          {type === "movie" ? "Now Playing" : "On Air"}
          <small>({type === "movie" ? "Movies" : "TV Shows"})</small>
        </Typography>
        <Stack direction="row" sx={{ alignItems: "center", mr: 1 }}>
          {type === "movie" ? <MdLocalMovies /> : <MdOutlineLocalMovies />}
          <Switch
            value={type === "tv"}
            onChange={handleTypeChange}
            inputProps={{ "aria-label": "movie or tv show" }}
          />
          {type === "tv" ? <RiTvFill /> : <RiTvLine />}
        </Stack>
      </Box>

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
            my: 1,
            px: 0,
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
      <Snackbar
        open={alert.open}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Alert
          onClose={handleClose}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default NowPlaying;
