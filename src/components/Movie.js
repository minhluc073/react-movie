import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import movieBg from '../images/movie.svg'

const Movie = ({ movie }) => {
  return (
    <>
      {movie !== null && (
        <Box
          sx={{
            width: "max(15rem,10vw)",
            maxWidth: "15rem",
          }}
        >
          <Card variant="outlined">
            <CardMedia component='svg'
            height="150"
            image={movieBg} />
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Movie;
