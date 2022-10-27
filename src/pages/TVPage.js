import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import cinemaPoster from "../images/cinema_poster.jpg";
import MoviePageSkeleton from "../ComponentSkeltons/MoviePageSkeleton";

const CircularProgressWithLabel = (props) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="primary.light">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const TVPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/${params.tvId}`).then((res) => {
      const mvData = res.data;
      console.log(mvData);
      setMovie((prev) => ({
        ...prev,
        title: mvData.name,
        poster: mvData.poster_path,
        year: new Date(mvData.first_air_date).getFullYear(),
        date: mvData.first_air_date,
        vote: mvData.vote_average ? mvData.vote_average * 10 : 0,
        vote_count: mvData.vote_count ? mvData.vote_count : 0,
        tagline: mvData.tagline,
        genres: mvData.genres,
        overview: mvData.overview,
        eps: mvData.number_of_episodes ? mvData.number_of_episodes : 0,
        seasons: mvData.number_of_seasons ? mvData.number_of_seasons : 0,
        countries: mvData.production_countries,
      }));
      axios
        .get(`https://api.themoviedb.org/3/tv/${params.tvId}/credits`)
        .then((creditsRes) => {
          console.log(creditsRes.data);
          const crew = creditsRes.data.crew;
          setMovie((prev) => ({
            ...prev,
            crew: crew
              ?.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
              .slice(0, 6),
          }));
          setLoading(false);
        });
    });
  }, [params.tvId]);

  return (
    <Container maxWidth="lg" sx={{ px: 0, py: 2 }}>
      {loading ? (
        <MoviePageSkeleton />
      ) : (
        <Box
          sx={{
            bgcolor: "primary.dark",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            p: 2,
            boxShadow: 2,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={6} md={4} lg={3}>
              <img
                alt="movie_poster"
                style={{
                  display: "block",
                  width: "min(40vw,16rem)",
                  objectFit: "cover",
                  height: "min(60vw,24rem)",
                  border: "0.2rem solid #256D85",
                  position: "relative",
                  right: { xs: 0, sm: "1rem" },
                  float: "right",
                }}
                src={`${
                  movie.poster
                    ? `https://image.tmdb.org/t/p/w500${movie.poster}`
                    : cinemaPoster
                }`}
              />
            </Grid>
            <Grid item xs={6} md={8} lg={9}>
              <Box sx={{ py: 1, pl: 1 }}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={1}
                  sx={{ alignItems: { xs: "flex-start", md: "flex-end" } }}
                >
                  <Typography
                    variant="h3"
                    className="oswald-500"
                    sx={{ fontSize: "min(3rem,7vw)", color: "primary.light" }}
                  >
                    {movie?.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "min(1.2rem,4vw)", color: "primary.light" }}
                  >
                    ({movie.year})
                  </Typography>
                </Stack>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={1}
                  divider={<Divider orientation="vertical" flexItem />}
                  sx={{ alignItems: { xs: "flex-start", md: "center" }, my: 2 }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center" }}
                  >
                    <CircularProgressWithLabel
                      value={movie.vote}
                      sx={{ color: "primary.light" }}
                    />
                    <Typography variant="body1" sx={{ color: "primary.light" }}>
                      User Rating
                    </Typography>
                  </Stack>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        px: 1,
                        pt: 1,
                        color: "primary.light",
                        maxWidth: "10rem",
                      }}
                    >
                      {movie.seasons && movie.seasons} Seasons
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        px: 1,
                        pt: 1,
                        color: "primary.light",
                        maxWidth: "10rem",
                      }}
                    >
                      {movie.eps && movie.eps} Episodes
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        px: 1,
                        pt: 1,
                        color: "primary.light",
                        maxWidth: "10rem",
                      }}
                    >
                      {movie.date && movie.date} -{" "}
                      {movie.countries &&
                        movie.countries.length > 0 &&
                        movie.countries.map(
                          (country) => `(${country.iso_3166_1})`
                        )}
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="column" spacing={1} sx={{ py: 1 }}>
                  <Typography
                    component="i"
                    variant="body2"
                    sx={{
                      maxWidth: "25rem",
                      fontSize: "min(1rem,4vw)",
                      color: "primary.light",
                    }}
                  >
                    {movie.tagline && movie.tagline}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      maxWidth: "18rem",
                    }}
                  >
                    {movie.genres &&
                      movie.genres.length > 0 &&
                      movie.genres.map((genre) => (
                        <Chip
                          sx={{
                            color: "primary.light",
                            m: "0.2rem",
                            bgcolor: "secondary.dark",
                          }}
                          label={genre.name}
                        />
                      ))}
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ mt: 1, display: { xs: "none", md: "block" }, px: 1 }}>
                <Typography
                  variant="h5"
                  className="oswald-500"
                  sx={{ color: "primary.light" }}
                >
                  Overview
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "primary.light", maxWidth: "80vw", my: 1 }}
                >
                  {movie.overview && movie.overview}
                </Typography>
                <Grid container spacing={1} sx={{ maxWidth: "80vw" }}>
                  {movie.crew &&
                    movie.crew.length > 0 &&
                    movie.crew.map((member) => (
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "primary.light",
                            mt: 1,
                            fontWeight: 700,
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "primary.light", mb: 2 }}
                        >
                          {member.job}
                        </Typography>
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
              <Box sx={{ mt: 2, mx: 1, px: 1 }}>
                <Typography
                  variant="h5"
                  className="oswald-500"
                  sx={{ color: "primary.light" }}
                >
                  Overview
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "primary.light", maxWidth: "80vw", my: 1 }}
                >
                  {movie.overview && movie.overview}
                </Typography>
                <Grid container spacing={1} sx={{ maxWidth: "80vw" }}>
                  {movie.crew &&
                    movie.crew.length > 0 &&
                    movie.crew.map((member) => (
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "primary.light",
                            mt: 1,
                            fontWeight: 700,
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "primary.light", mb: 2 }}
                        >
                          {member.job}
                        </Typography>
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default TVPage;
