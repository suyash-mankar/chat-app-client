import React from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import ChatDialog from "./chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const Component = styled(Box)`
  height: 100vh;
  background: #111b21;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

export default function Messenger() {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <ChatDialog />
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
}
