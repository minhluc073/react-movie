import { Typography } from "@mui/material";
import React from "react";

const ErrorPage = () => {
  return (
    <Typography
      variant="h4"
      className="oswald-500"
      sx={{ textAlign: "center", my: 3 }}
    >
      {"Sorry, we got nothing to display here :)"}
    </Typography>
  );
};

export default ErrorPage;
