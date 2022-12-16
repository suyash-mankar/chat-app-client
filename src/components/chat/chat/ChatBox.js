import React from "react";
import { Box } from "@mui/material";

// components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Footer from "./Footer";

export default function ChatBox() {
  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader />
      <Messages />
      <Footer />
    </Box>
  );
}
