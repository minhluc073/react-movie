import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link as LinkComp,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleNavMenuOpen = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleNavMenuClose = (e) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              MOVIELOFT
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="navbar menu"
              aria-controls="navbar-nav"
              aria-haspopup="true"
              onClick={handleNavMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="navbar-nav"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleNavMenuClose}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">
                  <Link
                    to="/about"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    ABOUT
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">
                  <LinkComp
                    href="https://github.com/shinjith-dev/movie-loft"
                    color="inherit"
                    underline="none"
                  >
                    GITHUB
                  </LinkComp>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              onClick={() => {}}
              sx={{ color: "inherit", display: "block" }}
            >
              <Link
                to="/about"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                ABOUT
              </Link>
            </Button>
            <Button
              onClick={() => {}}
              sx={{ color: "inherit", display: "block" }}
            >
              <LinkComp
                href="https://github.com/shinjith-dev/movie-loft"
                color="inherit"
                underline="none"
              >
                GITHUB
              </LinkComp>
            </Button>
          </Box>

          <Typography
            variant="h5"
            noWrap
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              MOVIELOFT
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
