import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import CircleIcon from "@mui/icons-material/Circle";

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

export default function ChatHeader({ person }) {
  // get the active users from context
  const { activeUsers } = useContext(AccountContext);

  return (
    <Header>
      <Image src={person.picture} alt="user-dp" />
      <Box>
        <Name> {person.name} </Name>
        <Status>
          {/* if the person whom I am chatting to is in the activeUsers array, show 'online', otherwise show 'offline' */}
          {activeUsers?.find((user) => user.sub === person.sub) ? (
            <>
              <CircleIcon style={{ color: "green", fontSize: 8 }} /> online
            </>
          ) : (
            "offline"
          )}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
}
