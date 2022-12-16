import { Dialog, Box, styled } from "@mui/material";
import React from "react";

// components
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
  background: #111A20;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(135, 150, 160, 0.15);
`;

const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: "0",
  backgroundColor: "#222E35",
};

export default function ChatDialog() {
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          <ChatBox />
          {/* <EmptyChat /> */}
        </RightComponent>
      </Component>
    </Dialog>
  );
}
