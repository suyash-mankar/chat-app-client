import React from "react";
import { Box } from "@mui/material";

// components
import Header from "./Header";
import Search from "./Search";

export default function Menu() {
  return (
    <Box>
      <Header />
      <Search />
    </Box>
  );
}
