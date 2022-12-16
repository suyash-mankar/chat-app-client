import React from "react";
import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";

const Container = styled(Box)`
  height: 65px;
  background: #202c33;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;

  & > * {
    margin: 5px;
    color: #8696a0;
  }
`;

const Search = styled(Box)`
  background-color: #2a3942;
  border-radius: 6px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 5px;
  padding-left: 25px;
  font-size: 16px;
  color: #d1d7db;
  font-family: inherit;
`;

export default function Footer() {
  return (
    <Container>
      <EmojiEmotionsOutlined style={{ fontSize: "1.7rem" }} />
      <AttachFile style={{ fontSize: "1.7rem", transform: "rotate(40deg)" }} />
      <Search>
        <InputField placeholder="Type a message" />
      </Search>
      <Mic style={{ fontSize: "1.7rem" }} />
    </Container>
  );
}
