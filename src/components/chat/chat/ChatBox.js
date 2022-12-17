import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

// components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Footer from "./Footer";
import { getConversation, newMessage } from "../../../service/api";

export default function ChatBox() {
  const { person, account } = useContext(AccountContext);

  const [messageText, setMessageText] = useState("");
  const [conversation, setConversation] = useState("");
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    const getConversationDetails = async () => {
      let conversationData = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(conversationData);
    };
    getConversationDetails();
  }, [person.sub]);

  const sendText = async (e) => {
    if (e.key === "Enter") {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: messageText,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: fileUrl,
        };
      }

      await newMessage(message);
      setMessageText("");
      setFile("");
      setFileUrl("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages
        person={person}
        conversation={conversation}
        newMessageFlag={newMessageFlag}
      />
      <Footer
        sendText={sendText}
        messageText={messageText}
        setMessageText={setMessageText}
        file={file}
        setFile={setFile}
        setFileUrl={setFileUrl}
      />
    </Box>
  );
}
