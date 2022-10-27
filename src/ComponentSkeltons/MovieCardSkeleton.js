
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const MovieCardSkelton
 = ({ movie, marg }) => {
  return (
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
          style={{
            width: "100%",
            height: "min(43vw,16rem)",
          }}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{ bgcolor: "secondary.dark", height: "100%" }}
          />
        </CardMedia>
        <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
            }}
          >
            <Skeleton sx={{ bgcolor: "secondary.dark" }} />
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flex-start",
              opacity: 0.8,
            }}
          >
            <Typography
              variant="body2"
              component="span"
              sx={{
                flexGrow: { xs: 0, sm: 0.45 },
                width: { sm: "auto", xs: "90%" },
                mr: 1,
              }}
            >
              <Skeleton sx={{ bgcolor: "secondary.dark" }} />
            </Typography>

            <Typography
              variant="body2"
              component="span"
              sx={{
                flexGrow: { xs: 0, sm: 0.45 },
                width: { sm: "auto", xs: "85%" },
              }}
            >
              <Skeleton sx={{ bgcolor: "secondary.dark" }} />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieCardSkelton
;
