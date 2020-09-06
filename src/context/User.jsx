import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Config';

export const UserContext = createContext({user: null});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const { displayName, email } = authUser;
        setUser({ displayName, email });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

