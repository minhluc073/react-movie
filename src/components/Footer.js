import { Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 3, mt: 5}}>
      <Typography
        variant="body2"
        className="monospace"
        sx={{ textAlign: "center" }}
      >
        COPYRIGHT 2022 | SHINJITH-DEV
      </Typography>
    </Container>
  );
};

export default Footer;
