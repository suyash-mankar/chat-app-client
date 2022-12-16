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

export default function Conversations() {
  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      setUsers(response);
    };
    fetchData();
  }, []);

  return (
    <Component>
      {users.map((user, index) => {
        return (
          user.sub !== account.sub && (
            <>
              <Conversation user={user} key={user._id} />
              <StyledDivider key={index} />
            </>
          )
        );
      })}
    </Component>
  );
}
