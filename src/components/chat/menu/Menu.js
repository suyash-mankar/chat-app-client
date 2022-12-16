import React, { useState } from "react";
import { Box } from "@mui/material";

// components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

export default function Menu() {
  const [searchText, setSearchText] = useState("");

  return (
    <Box>
      <Header />
      <Search setSearchText={setSearchText} />
      <Conversations searchText={searchText} />
    </Box>
  );
}
