import React from "react";
import { Box } from "@mui/material";

// components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

export default function Menu() {
  return (
    <Box>
      <Header />
      <Search />
      <Conversations />
    </Box>
  );
}
