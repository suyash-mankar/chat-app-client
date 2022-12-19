import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { formatDate, downloadMedia } from "../../../utils/common";
import { AccountContext } from "../../../context/AccountProvider";
import GetAppIcon from "@mui/icons-material/GetApp";
import { iconPDF } from "../../../constants/data";

const Sent = styled(Box)`
  background: #025144;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  margin-bottom: 3px;
  height: auto;
`;

const Received = styled(Box)`
  background: #025144;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  margin-bottom: 3px;
  height: auto;
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
  // get the logged in use info from context
  const { account } = useContext(AccountContext);

  return (
    <>
      {/* if the accound id matched with the message sender id, render "Sent" component else render "Received" component  */}
      {account.sub === message.senderId ? (
        <Sent>
          {/* if msg type is file, render <FileMessage /> otherwise render <TextMessage /> */}
          {message.type === "file" ? (
            <FileMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Sent>
      ) : (
        <Received>
          {message.type === "file" ? (
            <FileMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Received>
      )}
    </>
  );
}

// component to render text message text and time
const TextMessage = ({ message }) => {
  return (
    <>
      <Text> {message.text} </Text>
      <Time> {formatDate(message.createdAt)} </Time>
    </>
  );
};

// component to render file message text, img and time
const FileMessage = ({ message }) => {
  return (
    <Box style={{ position: "relative" }}>
      {/* if the message is a pdf */}
      {message?.text?.includes(".pdf") ? (
        <Box style={{ display: "flex", alignItems: "center" }}>
          <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
          <Typography style={{ color: "#e9edef", fontSize: 14 }}>
            {message.text.split("/").pop()}{" "}
          </Typography>
        </Box>
      ) : (
        <img
          style={{
            width: 300,
            height: "100%",
            maxHeight: 300,
            objectFit: "cover",
            borderRadius: "5px",
          }}
          src={message.text}
          alt={message.text}
        />
      )}
      <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
        <GetAppIcon
          onClick={(e) => downloadMedia(e, message.text)}
          style={{
            marginRight: "10px",
            border: "1px solid grey",
            borderRadius: "50%",
          }}
          fontSize="small"
        />
        {formatDate(message.createdAt)}
      </Time>
    </Box>
  );
};
