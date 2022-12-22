import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

// components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Footer from "./Footer";
import {
  getConversation,
  newMessage,
  setConversationInDb,
} from "../../../service/api";

export default function ChatBox() {
  // use Context
  const { person, account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);

  // use State
  const [messageText, setMessageText] = useState("");
  const [conversation, setConversation] = useState("");
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    const getConversationDetails = async () => {
      // api call to get the conversation data from db

      let conversationData = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });

      if (!conversationData) {
        await setConversationInDb({
          senderId: account.sub,
          receiverId: person.sub,
        });

        conversationData = await getConversation({
          senderId: account.sub,
          receiverId: person.sub,
        });
      }

      // set conversation in state
      setConversation(conversationData);
    };
    getConversationDetails();
  }, [person.sub]);

  // on pressing 'enter', send the message
  const sendText = async (e) => {
    if (e.key === "Enter") {

      let message = {};
      // if the message is not a file
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: messageText,
        };
        // if the message is a file
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: fileUrl,
        };
      }

      // emit message using socket
      socket.current.emit("sendMessage", message);

      // api call to add message in db
      await newMessage(message);

      // empty the states
      setMessageText("");
      setFile("");
      setFileUrl("");
      // change the state 'newMessageFlag' to re-render whenever a new msg is send
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
