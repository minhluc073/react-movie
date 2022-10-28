import { Box, IconButton, Input } from "@mui/material";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Header = ({ searchVal = "", setSearch }) => {
  const [searchValue, setSearchValue] = useState(searchVal);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (searchValue.splice() !== "") setSearch(searchValue.splice(), true);
    else setSearch("", false);
  };

  return (
    <div
      id="poster-light"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "min(35vh, 245px)",
      }}
    >
      <Box
        id="form"
        component="form"
        sx={{
          backgroundColor: "primary.main",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          border: 3,
          m: 2,
          p: 0,
          borderColor: "secondary.dark",
          fontSize: "1.5rem",
          display: "flex",
          borderRadius: "35px !important",
        }}
        onSubmit={handleSearchSubmit}
      >
        <Input
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search movies & tv shows"
          sx={{
            color: "primary.contrastText",
            fontSize: "inherit",
            width: "min(65vw,35rem)",
            my: 1,
            ml:"0.8rem",
            mr:"0.1rem",
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
            borderTopRightRadius: "25px !important",
            borderBottomRightRadius: "25px !important",
          }}
        >
          <IconButton type="submit">
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
