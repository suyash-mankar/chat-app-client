import React from "react";
import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

// components
import Profile from "./Profile";

const Header = styled(Box)`
  background: #202c33;
  height: 107px;
  color: white;
  display: flex;

  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const Component = styled(Box)`
  background: #111b21;
  height: 85%;
`;

const Text = styled(Typography)`
  font-size: 18px;
`;

const drawerStyle = {
  left: 20,
  top: 18,
  height: "95%",
  width: "29.3%",
  boxShadow: "none",
};

export default function InfoDrawer({ openDrawer, setOpenDrawer }) {
  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer
      open={openDrawer}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
      hideBackdrop={true}
    >
      <Header>
        <ArrowBack
          style={{ marginBottom: "3px" }}
          onClick={() => setOpenDrawer(false)}
        />
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
}
