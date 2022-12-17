import React, { useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import { getMessages } from "../../../service/api";
import Message from "./Message";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Wrapper = styled(Box)`
  background-image: url("https://user-images.githubusercontent.com/84366054/208151388-a2a456aa-16e8-4999-acd3-e0b794db1fb9.jpg");
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
  const { socket } = useContext(AccountContext);

  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  const scrollRef = useRef();

  useEffect(() => {
    const getMessageDetails = async () => {
      const messagesData = await getMessages(conversation._id);
      setMessages(messagesData);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  // To keep the scroll bar at the end
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({ ...data, createdAt: Date.now() });
    });
  }, []);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  return (
    <Wrapper>
      <Component>
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
