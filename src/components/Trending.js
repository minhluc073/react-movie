import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TMDB_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2VlZWNhMzNlMjlkZDFjNTQwNzU0ZjQ2MDI0MjBkYiIsInN1YiI6IjYzNTNiMzgyNTZiOWY3MDA3ZTJlZDc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-28aCsl_Dpfh7RyYzJLehXZxWbIvWfUYQnCJwqACmE";

const Trending = () => {
    const [movies,setMovies] = useState([]);
  axios.defaults.headers.common["Authorization"] = `Bearer ${TMDB_API_TOKEN}`;
  axios.defaults.headers.get["Content-Type"] = "application/json";
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/all/week").then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, []);
  return (
    <Container maxWidth="md">
      <Typography variant="h3">Trending Movies</Typography>
      {movies.length!==0 && movies.map(movie=>{return <Typography>{movie.title}</Typography>})}
{/* <Movie movie={movie}/> */}
    </Container>
  );
};

export default Trending;
