import { Box, styled, Divider } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";

// components
import Conversation from "./Conversation";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 75px;
  background-color: rgba(134, 150, 160, 0.15);
`;

export default function Conversations({ searchText }) {
  const [users, setUsers] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    // api call to get all the users from db
    const fetchData = async () => {
      let response = await getUsers();

      // for searching users
      const filteredData = response.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setUsers(filteredData);
    };
    fetchData();
  }, [searchText]);

  useEffect(() => {
    // add the user in the active users array in socket
    socket.current.emit("addUsers", account);
    // get the active users list from socket and save it in the state
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Component>
      {users.map((user) => {
        return (
          user.sub !== account.sub && (
            <div key={user.sub}>
              <Conversation user={user} />
              <StyledDivider />
            </div>
          )
        );
      })}
    </Component>
  );
}
