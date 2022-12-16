import React from "react";
import { emptyChatImage } from "../../../constants/data";
import { Box, Typography, styled, Divider } from "@mui/material";

const Component = styled(Box)`
  background: #222e35;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;
const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: rgba(233, 237, 239, 0.88);
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: rgb(134, 150, 160);
  font-weight: 400;
  font-family: inherit;
`;

export default function EmptyChat() {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="empty-chat" />
        <Title>WhatsApp Web</Title>
        <SubTitle>
          Send and receive messages without keeping your phone online.
        </SubTitle>
        <SubTitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </SubTitle>
      </Container>
    </Component>
  );
}
