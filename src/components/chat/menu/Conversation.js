import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});

const Container = styled(Box)`
  display: flex;
`;

const Timestamp = styled(Typography)`
  color: #8696a0;
  font-size: 12px;
  margin-left: auto;
  margin-right: 10px;
`;

const Text = styled(Typography)`
  color: #8696a0;
  font-size: 14px;
`;

const UserName = styled(Typography)`
  color: #e9edef;
`;

export default function Conversation({ user }) {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);

  const [latestConversation, setLatestConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setLatestConversation({
        text: data?.message,
        timestamp: data?.updatedAt,
      });
    };
    getConversationDetails();
  }, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={user.picture} alt="user-dp" />
      </Box>
      <Box style={{ width: "100%" }}>
        <Container>
          <UserName> {user.name} </UserName>
          {latestConversation?.text && (
            <Timestamp>{formatDate(latestConversation?.timestamp)}</Timestamp>
          )}
        </Container>

        <Box>
          <Text>
            {/* .includes(localhost) - to check if the latest conversation message was a media */}
            {/* change 'localhost' to production url when going for production */}
            {latestConversation?.text?.includes("localhost")
              ? "media"
              : latestConversation.text}
          </Text>
        </Box>
      </Box>
    </Component>
  );
}
