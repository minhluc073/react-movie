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
      date: movie.release_date ? movie.release_date : movie.first_air_date,
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
              width: "16rem",
              height: "21rem",
              backgroundColor: "primary.dark",
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "0 95%",
                height: "16rem",
              }}
              image={`${
                movieInfo.poster
                  ? `https://image.tmdb.org/t/p/w500${movieInfo.poster}`
                  : cinemaPoster
              }`}
            />
            <CardContent>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "clip",
                  color: "primary.contrastText",
                }}
              >
                {movieInfo.title && movieInfo.title}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "flex-start", opacity: 0.8 }}
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ color: "primary.light" }}
                >
                  {movieInfo.date ? movieInfo.date : "Unknown Date"}
                </Typography>
                <Rating
                  sx={{ ml: 1 }}
                  name="read-only"
                  value={movieInfo.vote}
                  size="small"
                  readOnly
                />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ color: "primary.light",opacity:0.8 }}
                >
                  ({movieInfo.vote_count ? movieInfo.vote_count: "0"})
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default MovieCard;
