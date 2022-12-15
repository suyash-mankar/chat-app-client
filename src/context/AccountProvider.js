import React, { useState, createContext } from "react";

export const AccountContext = createContext(null);

export default function AccountProvider({ children }) {
  const [account, setAccount] = useState();

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
