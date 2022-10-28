import { Container, Link, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container sx={{ px: 2, mt: "5rem" }} maxWidth="lg">
      <Typography variant="h4" className="oswald-500">
        About Movie Loft
      </Typography>
      <Typography variant="body1" sx={{ my: 2 }}>
        Movie Loft is a web-based movie database client with a minimal user
        interface. It can be useful to obtain information about movies,
        television shows, and their specifics.
      </Typography>
      <Typography variant="h5" className="oswald-500" sx={{ mt: "2rem" }}>
        Attributions & Acknowledgements
      </Typography>
      <ul>
        <li>
          <Link href="https://www.themoviedb.org/" title="TMDB API">
            Movie database API provider
          </Link>
        </li>
        <li>
          <Link
            href="https://www.flaticon.com/free-icons/movie"
            title="movie icons"
          >
            Logo Icon - Movie icons created by Freepik - Flaticon
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default About;
