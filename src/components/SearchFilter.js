import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import config from "../configs/searchConfig";

const SearchFilter = ({ change }) => {
  const [includeAdult, setIncludeAdult] = useState(config.includeAdult);
  const [type, setType] = useState(config.type);

  const handleIncludeAdultChange = (e) => {
    setIncludeAdult(e.target.checked);
    config.includeAdult = e.target.checked;
    change();
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    config.type = e.target.value;
    change();
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "secondary.light",
        borderRadius: "5px",
        mt: 2,
        mx:"auto",
        p: 1,
        boxShadow: 2,
        maxWidth:"33rem"
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ fontSize: { xs: "0.7rem", md: "0.9rem" }, alignItems: "center" }}
      >
        <Container
          sx={{ display: "flex", alignItems: "center", fontSize: "inherit",p:0 }}
        >
          <Typography sx={{ fontSize: "inherit", mr: 1 }}>Type</Typography>
          <FormControl sx={{ minWidth: 120, color: "inherit" }}>
            <Select
              value={type}
              onChange={handleTypeChange}
              displayEmpty
              inputProps={{ "aria-label": "type" }}
              size="small"
              sx={{
                color: "inherit",
                fontSize: { xs: "0.7rem", md: "0.8rem" },
              }}
            >
              <MenuItem value="movie">Movie</MenuItem>
              <MenuItem value="tv">TV Show</MenuItem>
            </Select>
          </FormControl>
        </Container>
        <Container
          sx={{ display: "flex", alignItems: "center", fontSize: "inherit",p:0 }}
        >
          <Typography sx={{ fontSize: "inherit", mr: 2 }}>
            Explicit results
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                onChange={handleIncludeAdultChange}
                color="secondary"
                checked={includeAdult}
                sx={{ p: "4px" }}
              />
            }
            label={
              <Typography component="span" sx={{ fontSize: "inherit" }}>
                {`${includeAdult ? "Include" : "Don't"}`}
              </Typography>
            }
            sx={{ fontSize: "inherit" }}
          />
        </Container>
      </Stack>
    </Box>
  );
};

export default SearchFilter;
