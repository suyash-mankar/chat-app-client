import React, { useState, createContext } from "react";

export const AccountContext = createContext(null);

export default function AccountProvider({ children }) {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState();

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
