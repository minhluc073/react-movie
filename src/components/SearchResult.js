import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import MovieCard from "./MovieCard";

const SearchResult = ({ search = "" }) => {
  const [searchValue, setSearchValue] = useState(search);
  const [showResult, setShowResult] = useState({
    show: false,
    query: "",
    result: [],
  });

  useEffect(() => {
    if (search !== "") handleSearchSubmit();
  });

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=${searchValue}&page=1&include_adult=false`
      )
      .then((res) => {
        setShowResult((prev) => ({
          show: true,
          query: searchValue,
          result: res.data.results,
        }));
      });
  };

  return (
    <>
      <div
        id="poster"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "min(25vh, 170px)",
        }}
      >
        <Box
          id="form"
          component="form"
          sx={{
            backgroundColor: "secondary.main",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            border: 3,
            m: 2,
            p: 0,
            borderColor: "secondary.dark",
            fontSize: "1.5rem",
            display: "flex",
          }}
          onSubmit={handleSearchSubmit}
        >
          <Input
            value={searchValue}
            onChange={handleSearchChange}
            autoFocus={true}
            startAdornment={
              <InputAdornment position="start">
                <BiCameraMovie style={{ color: "rgba(255,255,255,0.8)" }} />
              </InputAdornment>
            }
            sx={{
              color: "secondary.contrastText",
              fontSize: "inherit",
              ml: 2,
              my: 1,
              "&::before": {
                border: "none !important",
              },
              "&::after": {
                border: "none !important",
              },
            }}
          />
          <Box
            sx={{
              display: "inline-flex",
              px: 2,
              backgroundColor: "secondary.dark",
            }}
          >
            <IconButton type="submit">
              <BiSearchAlt
                style={{ fontSize: "inherit", color: "rgba(255,255,255,0.8)" }}
              />
            </IconButton>
          </Box>
        </Box>
      </div>
      <Container maxWidth="lg">
        {showResult.show && (
          <Typography variant="h4" sx={{ mt: 3, mx: 1 }}>
            Search results for "{showResult.query}"
          </Typography>
        )}
        <Grid
          container
          spacing={2}
          sx={{ my: 2, mx: "auto", alignItems: "center" }}
        >
          {showResult.result.length !== 0 &&
            showResult.result.map((movie) => (
              <Grid item sm={6} md={4} lg={3}>
                <MovieCard marg="auto" movie={movie} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default SearchResult;
