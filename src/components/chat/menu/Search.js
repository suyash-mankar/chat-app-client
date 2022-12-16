import React from "react";
import { Box, InputBase, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Component = styled(Box)`
  background: #111b21;
  height: 45px;
  border-bottom: 1px solid rgba(134, 150, 160, 0.15);
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  background-color: #202c33;
  position: relative;
  margin: 0 13px;
  width: 100%;
  border-radius: 10px;
`;

const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 6px 10px;
  color: rgba(134, 150, 160);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 65px;
  height: 15px;
  font-size: 14px;
  color: rgba(209, 215, 219);
`;

export default function Search() {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize="small" />
        </Icon>
        <InputField placeholder="Search or start new chat" />
      </Wrapper>
    </Component>
  );
}
