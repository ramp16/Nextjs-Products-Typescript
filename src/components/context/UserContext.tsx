import React, { createContext, PropsWithChildren, ReactNode, useState } from 'react';

export const userContext = createContext({});

export const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [userName, setUsername] = useState('');
  const [userDetail, setUserDetail] = useState({
    username: 'Daniel Instructor',
    email: 'instructor@rootsta.com',
    status: {
      enabled: true
    }
  })

  return (<userContext.Provider value={{
    userName,
    setUsername,
    userDetail,
    setUserDetail
  }}>
    {children}
  </userContext.Provider>);
};

