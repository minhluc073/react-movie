import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div
      id="poster"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "secondary.main",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          border: 3,
          m: 2,
          p: 0,
          borderColor: "secondary.dark",
          fontSize: "1.5rem",
          display: "flex",
        }}
      >
        <Input
          startAdornment={
            <InputAdornment position="start">
              <BiCameraMovie style={{ color: "rgba(255,255,255,0.8)" }} />
            </InputAdornment>
          }
          sx={{
            color: "secondary.contrastText",
            fontSize: "inherit",
            ml: 2,
            my: 1,
            "&::before": {
              border: "none !important",
            },
            "&::after": {
              border: "none !important",
            },
          }}
        />
        <Box
          sx={{
            display: "inline-flex",
            px: 2,
            backgroundColor: "secondary.dark",
          }}
        >
          <IconButton>
            <BiSearchAlt
              style={{ fontSize: "inherit", color: "rgba(255,255,255,0.8)" }}
            />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
