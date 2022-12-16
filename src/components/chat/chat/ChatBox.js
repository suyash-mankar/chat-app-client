import React from "react";
import { Box } from "@mui/material";

// components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import ChatFooter from "./ChatFooter";

export default function ChatBox() {
  return (
    <Box>
      <ChatHeader />
      <Messages />
      <ChatFooter />
    </Box>
  );
}
