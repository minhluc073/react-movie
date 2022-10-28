import { Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Typography variant="h4" className="oswald-500" sx={{ m: 2, mt: "5rem" }}>
        About Movie Loft
      </Typography>
      <Typography variant="body1" sx={{ m: 2 }}>
        Movie Loft is a web-based movie database client with a minimal user
        interface. It can be useful to obtain information about movies,
        television shows, and their specifics.
      </Typography>
    </>
  );
};

export default About;
