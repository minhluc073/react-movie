import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import config from "../configs/searchConfig";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import SearchFilter from "../components/SearchFilter";

const SearchResult = ({ search = "" }) => {
  const [showResult, setShowResult] = useState({
    show: false,
    query: search,
    result: [],
    page: 1,
    pages_total: 1,
    change:0
  });
  const [loading, setLoading] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
      setLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/search/${config.type}?language=en-US&query=${search}&page=${showResult.page}&include_adult=${config.includeAdult}`
        )
        .then(async (res) => {
          setShowResult((prev) => ({
            ...prev,
            show: true,
            query: search,
            result: res.data.results,
            page: res.data.page,
            pages_total: res.data.total_pages,
          }));
          await sleep(500)
          setLoading(false);
        });
  }, [search,showResult.page,showResult.change]);

  const handlePageChange = (e, value) => {
    setShowResult((prev) => ({ ...prev, page: value }));
  };

  const toLoad = () => {
    if (loading)
      return [...Array(20)].map((item, index) => (
        <Grid key={`moviePreloadSkelton_${index}`} item sm={6} md={4} lg={3}>
          <MovieCardSkeleton marg="auto" />
        </Grid>
      ));
    else {
      if (showResult.result.length !== 0)
        return showResult.result.map((movie) => (
          <Grid key={movie.id} item xs={6} md={4} lg={3} sx={{p:"0 !important",my:"1rem"}}>
            <MovieCard marg="auto" movie={movie} />
          </Grid>
        ));
    }
  };


  return (
    <>
      <Container maxWidth="lg" sx={{p:0}}>
          <SearchFilter
            change={() => {
                 setShowResult((prev) => ({
                   ...prev,
                   change: showResult.change === 0 ? 1 : 0,
                 }));
            }}
          />
        <Typography variant="h4" sx={{ mt: 3, mx: 1,fontSize:"min(7vw,2.125rem)" }}>
          Search results for "{showResult.query}"
        </Typography>
        <Grid
          container
          spacing={0}
          sx={{ my: 2, mx: "auto", justifyContent: "center" }}
        >
          {toLoad()}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Pagination
            value={showResult.page}
            onChange={handlePageChange}
            count={showResult.pages_total}
            color="primary"
            shape="rounded"
          />
        </Box>
      </Container>
    </>
  );
};

export default SearchResult;
