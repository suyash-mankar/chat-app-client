import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../../../utils/common";
import { AccountContext } from "../../../context/AccountProvider";

const Sent = styled(Box)`
  background: #025144;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;

`;

const Received = styled(Box)`
  background: #025144;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 15px 0 5px;
  color: #e9edef;
  font-family: inherit;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: hsla(0, 0%, 100%, 0.6);
  padding: 0 15px 0 5px;
  font-family: inherit;
  margin-top: auto;
  word-break: keep-all;
`;

export default function Message({ message }) {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.sub == message.senderId ? (
        <Sent>
          <Text> {message.text} </Text>
          <Time> {formatDate(message.createdAt)} </Time>
        </Sent>
      ) : (
        <Received>
          <Text> {message.text} </Text>
          <Time> {formatDate(message.createdAt)} </Time>
        </Received>
      )}
    </>
  );
}
