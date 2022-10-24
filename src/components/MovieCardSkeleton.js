import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const MovieCardSkeleton = ({ marg }) => {
  return (
    <Box sx={{ scrollSnapAlign: "center" }}>
      <Card
        variant="outlined"
        sx={{
          boxShadow: 3,
          mx: marg,
          maxWidth: "16rem",
          width: "16rem",
          height: "21rem",
          backgroundColor: "secondary.dark",
        }}
      >
        <CardMedia
          style={{
            width: "100%",
            height: "16rem",
          }}
        >
          <Skeleton variant="rounded" animation="wave" sx={{ bgcolor: "secondary.main",height:"100%" }} />
        </CardMedia>

        <CardContent>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
            }}
          >
            <Skeleton sx={{ bgcolor: "secondary.main" }} />
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", opacity: 0.8 }}>
            <Typography
              variant="body2"
              component="span"
              sx={{ flexGrow: 0.45, mr: 1 }}
            >
              <Skeleton sx={{ bgcolor: "secondary.main" }} />
            </Typography>

            <Typography
              variant="body2"
              component="span"
              sx={{ flexGrow: 0.45 }}
            >
              <Skeleton sx={{ bgcolor: "secondary.main" }} />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieCardSkeleton;
