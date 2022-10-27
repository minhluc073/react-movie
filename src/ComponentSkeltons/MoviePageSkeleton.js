import { Box, Divider, Grid, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";

const MoviePageSkeleton = () => {
  return (
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
          <Box
            sx={{
              display: "block",
              width: "min(40vw,16rem)",
              height: "min(60vw,24rem)",
              border: "0.2rem solid #256D85",
              position: "relative",
              right: { xs: 0, sm: "1rem" },
              float: "right",
            }}
          >
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{ bgcolor: "secondary.dark", width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={8} lg={9}>
          <Box sx={{ py: 1, pl: 1 }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1}
              sx={{ alignItems: { xs: "flex-start", md: "baseline" } }}
            >
              <Typography
                variant="h3"
                sx={{ fontSize: "min(3rem,7vw)", color: "primary.light" }}
              >
                <Skeleton
                  variant="text"
                  sx={{ width: "min(40vw,35rem)", bgcolor: "secondary.dark" }}
                />
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "min(1.2rem,4vw)", color: "primary.light" }}
              >
                <Skeleton
                  variant="text"
                  sx={{ width: "min(8vw,10rem)", bgcolor: "secondary.dark" }}
                />
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
              sx={{ alignItems: { xs: "flex-start", md: "center" }, my: 2 }}
            >
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Skeleton
                  variant="circular"
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    bgcolor: "secondary.dark",
                  }}
                />
                <Typography variant="body1" sx={{ color: "primary.light" }}>
                  <Skeleton
                    variant="text"
                    sx={{ width: "min(8vw,10rem)", bgcolor: "secondary.dark" }}
                  />
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
                  <Skeleton
                    variant="text"
                    sx={{ width: "min(10vw,10rem)", bgcolor: "secondary.dark" }}
                  />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    px: 1,
                    py: 1,
                    color: "primary.light",
                    maxWidth: "10rem",
                  }}
                >
                  <Skeleton
                    variant="text"
                    sx={{ width: "min(8vw,10rem)", bgcolor: "secondary.dark" }}
                  />
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
                <Skeleton variant="text" sx={{ bgcolor: "secondary.dark" }} />
                <Skeleton variant="text" sx={{ bgcolor: "secondary.dark" }} />
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  maxWidth: "18rem",
                }}
              >
                {[...Array(5)].map((chip) => (
                  <Skeleton
                    variant="rounded"
                    sx={{
                      width: "3rem",
                      m: "0.3rem",
                      bgcolor: "secondary.dark",
                      borderRadius: "10px",
                    }}
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
              <Skeleton
                variant="text"
                sx={{ width: "min(8vw,10rem)", bgcolor: "secondary.dark" }}
              />
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "primary.light", maxWidth: "80vw", my: 1 }}
            >
              {[...Array(4)].map(() => (
                <Skeleton variant="text" sx={{ bgcolor: "secondary.dark" }} />
              ))}
            </Typography>
            <Grid container spacing={1} sx={{ maxWidth: "80vw" }}>
              {[...Array(4)].map((member) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Typography
                    variant="body2"
                    sx={{ color: "primary.light", mt: 1, fontWeight: 700 }}
                  >
                    <Skeleton
                      variant="text"
                      sx={{ bgcolor: "secondary.dark" }}
                    />
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "primary.light", mb: 2 }}
                  >
                    <Skeleton
                      variant="text"
                      sx={{ bgcolor: "secondary.dark" }}
                    />
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
              <Skeleton
                variant="text"
                sx={{ width: "min(15vw,10rem)", bgcolor: "secondary.dark" }}
              />
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "primary.light", maxWidth: "80vw", my: 1 }}
            >
              {[...Array(4)].map(() => (
                <Skeleton variant="text" sx={{ bgcolor: "secondary.dark" }} />
              ))}
            </Typography>
            <Grid container spacing={1} sx={{ maxWidth: "80vw" }}>
              {[...Array(4)].map(() => (
                <Grid item xs={12} sm={6} md={4}>
                  <Typography
                    variant="body2"
                    sx={{ color: "primary.light", mt: 1, fontWeight: 700 }}
                  >
                    <Skeleton
                      variant="text"
                      sx={{ width: "10rem", bgcolor: "secondary.dark" }}
                    />
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "primary.light", mb: 2 }}
                  >
                    <Skeleton
                      variant="text"
                      sx={{ width: "7rem", bgcolor: "secondary.dark" }}
                    />
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoviePageSkeleton;
