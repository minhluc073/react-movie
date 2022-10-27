import { Box, Container, IconButton, Stack, Switch, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./MovieCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MovieCardSkeleton from "../ComponentSkeltons/MovieCardSkeleton";
import { RiTvFill, RiTvLine } from "react-icons/ri";
import {MdLocalMovies, MdOutlineLocalMovies} from 'react-icons/md'


const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type,setType] = useState("movie");

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/${type}/popular`)
      .then(async (res) => {
        setMovies(res.data.results);
        await sleep(500);
        setLoading(false);
      });
  }, [type]);


  const handleScrollLeft = () => {
    document.getElementById("popular-cont").scrollLeft += Math.min(
      document.body.clientWidth * 0.6,
      500
    );
  };

  const handleScrollRight = () => {
    document.getElementById("popular-cont").scrollLeft -= Math.min(
      document.body.clientWidth * 0.6,
      500
    );
  };

  const handleTypeChange = (e)=>{
    setType(e.target.checked?"tv":"movie")
  }

  const toLoad = () => {
    if (loading)
      return [...Array(20)].map((item, index) => (
        <MovieCardSkeleton key={`popularPreLoadSkelton_${index}`} marg={2} />
      ));
    else if (movies.length > 0)
      return movies.map((movie) => (
        <Movie key={movie.id} marg={2} movie={movie} />
      ));
  };

  return (
    <Container maxWidth="lg" sx={{ p: 0, mt: 5 }}>
      <Box sx={{ display: "flex" }}>
        <Typography
        variant="body1"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.8rem", md: "2.125rem" },
            m: 2,
            flexGrow: 1,
          }}
          className="oswald-500"
        >
          Popular<small>({type === "movie" ? "Movies" : "TV Shows"})</small>
        </Typography>
        <Stack direction="row" sx={{ alignItems: "center",mr:1 }}>
          {type==="movie"?<MdLocalMovies />:<MdOutlineLocalMovies />}
          <Switch value={type==="tv"} onChange={handleTypeChange} inputProps={{ "aria-label": "movie or tv show" }} />
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
            my: 2,
            px: 0,
          }}
          id="popular-cont"
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

export default Popular;
