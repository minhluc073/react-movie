import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import cinemaPoster from "../images/cinema_poster.jpg";

const MovieCard = ({ movie,marg }) => {
  const [movieInfo, setMovieInfo] = useState(null);
  
  useEffect(() => {
    setMovieInfo((prev) => ({
      ...prev,
      title: movie.title ? movie.title : movie.name,
      poster: movie.poster_path,
      date: (new Date(movie.release_date ? movie.release_date : movie.first_air_date)).getFullYear(),
      vote: movie.vote_average ? movie.vote_average / 2 : 0,
      vote_count: movie.vote_count ? movie.vote_count : 0,
    }));
  }, [movie]);

  return (
    <>
      {movieInfo !== null && (
        <Box sx={{ scrollSnapAlign: "center" }}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: 3,
              mx: marg,
              maxWidth: "16rem",
              width: "min(43vw,16rem)",
              height: "min(63vw,21rem)",
              backgroundColor: "primary.dark",
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "0 95%",
                height: "min(43vw,16rem)",
              }}
              image={`${
                movieInfo.poster
                  ? `https://image.tmdb.org/t/p/w500${movieInfo.poster}`
                  : cinemaPoster
              }`}
            />
            <CardContent sx={{ p: {xs:1,sm:2} }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  fontSize: "min(1rem,4vw)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "clip",
                  color: "primary.contrastText",
                }}
              >
                {movieInfo.title && movieInfo.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column",sm:"row" },
                  alignItems: "flex-start",
                  opacity: 0.8,
                }}
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ color: "primary.light",mr:1, fontSize: "min(0.875rem,3vw)" }}
                >
                  {movieInfo.date ? movieInfo.date : "Unknown Date"}
                </Typography>
                <Box sx={{display:"flex"}}>
                  <Rating
                    name="rating"
                    value={movieInfo.vote}
                    size="small"
                    readOnly
                  />
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      color: "primary.light",
                      fontSize: "min(1rem,3vw)",
                      opacity: 0.8,
                    }}
                  >
                    ({movieInfo.vote_count ? movieInfo.vote_count : "0"})
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default MovieCard;
