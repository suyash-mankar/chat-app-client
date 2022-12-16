import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

import { defaultProfilePicture } from "../../../constants/data";

const Header = styled(Box)`
  height: 44px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
  color: #e9edef;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: #8696a0;
`;

const RightContainer = styled(Box)`
  margin-left: auto;

  & > svg {
    color: #aebac1;
    padding: 8px;
    font-size: 24px;
  }
`;

export default function ChatHeader() {
  return (
    <Header>
      <Image src={defaultProfilePicture} alt="user-dp" />
      <Box>
        <Name> Name </Name>
        <Status> Online Status </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
}