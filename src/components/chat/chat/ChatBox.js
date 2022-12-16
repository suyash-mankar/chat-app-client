import React from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

// components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Footer from "./Footer";

export default function ChatBox() {
  const { person } = useContext(AccountContext);

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} />
      <Footer />
    </Box>
  );
}
