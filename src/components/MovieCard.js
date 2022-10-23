import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";


const MovieCard = ({ movie }) => {
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    setMovieInfo((prev) => ({
      ...prev,
      title: movie.title ? movie.title : movie.name,
      poster: movie.poster_path,
      date: movie.release_date ? movie.release_date : movie.first_air_date,
      vote:movie.vote_average?movie.vote_average/2:0
    }));
    console.log(Math.round(movie.vote_average / 2));
  }, [movie]);

  return (
    <>
      {movieInfo !== null && (
        <Box>
          <Card
            variant="outlined"
            sx={{
              boxShadow: 3,
              mx: 1,
              maxWidth: "15rem",
              width: "15rem",
              height: "21rem",
              backgroundColor: "secondary.dark",
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
              image={`https://image.tmdb.org/t/p/w500${movieInfo.poster}`}
            />
            <CardContent>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "clip",
                  color: "secondary.contrastText",
                }}
              >
                {movieInfo.title && movieInfo.title}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "flex-start", opacity: 0.8 }}
              >
                <Typography variant="body2" component="span" sx={{color:"secondary.light"}}>
                  {movieInfo.date && movieInfo.date}
                </Typography>
                <Rating
                  sx={{ mx: 1 }}
                  name="read-only"
                  value={movieInfo.vote}
                  size="small"
                  readOnly
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default MovieCard;
