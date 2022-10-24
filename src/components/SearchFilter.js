import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import config from "../configs/searchConfig";

const SearchFilter = ({change}) => {
  const [includeAdult, setIncludeAdult] = useState(config.includeAdult);
  const [type, setType] = useState(config.type);

  const handleIncludeAdultChange = (e) => {
    setIncludeAdult(e.target.value);
    config.includeAdult = e.target.value;
    change()
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    config.type = e.target.value;
    change()
  };;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "secondary.dark",
        color: "secondary.light",
        borderRadius: "5px",
        mt: 2,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
        <FormHelperText sx={{ color: "inherit" }}>Type</FormHelperText>
        <Select
          value={type}
          onChange={handleTypeChange}
          displayEmpty
          inputProps={{ "aria-label": "Type" }}
          sx={{ color: "inherit" }}
        >
          <MenuItem value="movie">Movie</MenuItem>
          <MenuItem value="tv">TV Show</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
        <FormHelperText sx={{ color: "inherit" }}>
          Include adult result
        </FormHelperText>
        <Select
          value={includeAdult}
          onChange={handleIncludeAdultChange}
          displayEmpty
          inputProps={{ "aria-label": "Include adult result" }}
          sx={{ color: "inherit" }}
        >
          <MenuItem value={true}>Include</MenuItem>
          <MenuItem value={false}>Don't Include</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchFilter;
