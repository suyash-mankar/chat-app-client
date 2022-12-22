import React, { useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import { getMessages } from "../../../service/api";
import Message from "./Message";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { whatsAppBackgroundImage } from "../../../constants/data";

const Wrapper = styled(Box)`
  background-image: url(${whatsAppBackgroundImage});
  background-size: 40%;
`;

const Component = styled(Box)`
  height: 78vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 0px 80px;
`;

export default function Messages({ person, conversation, newMessageFlag }) {
  // get socket from context
  const { socket } = useContext(AccountContext);

  // useState
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  // useRef for scroll
  const scrollRef = useRef();

  // call this useEffect whenever person or conversation changes or a new msg is sent
  useEffect(() => {
    const getMessageDetails = async () => {
      // api call to get all the msg from the db
      const messagesData = await getMessages(conversation._id);
      setMessages(messagesData);
    };
    conversation && getMessageDetails();
  }, [person, conversation, newMessageFlag]);

  // To keep the scroll bar at the end
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  // to set the incoming msg from socket
  useEffect(() => {
    // get the incoming msg from socket
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({ ...data, createdAt: Date.now() });
    });
  }, []);

  // add incoming message in messages state
  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  return (
    <Wrapper>
      <Component>
        {/* if messages are present, render every message */}
        {messages &&
          messages.map((message) => {
            return (
              <Container ref={scrollRef} key={message._id}>
                <Message message={message} />
              </Container>
            );
          })}
      </Component>
    </Wrapper>
  );
}
