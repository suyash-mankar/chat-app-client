import React, { useState, useEffect, createContext, useRef } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

export default function AccountProvider({ children }) {

  const [account, setAccount] = useState();
  const [person, setPerson] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = io(`${process.env.REACT_APP_SOCKET_SERVER_URL}`);
  }, []);

  return (
  // following states and socket will be available globally
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
