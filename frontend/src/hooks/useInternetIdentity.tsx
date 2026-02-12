import React, { createContext, useContext, useState } from 'react';

type InternetIdentityContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const InternetIdentityContext =
  createContext<InternetIdentityContextType | null>(null);

export function InternetIdentityProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // placeholder (later you can wire real auth)
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <InternetIdentityContext.Provider
      value={{ isAuthenticated, login, logout }}
    >
      {children}
    </InternetIdentityContext.Provider>
  );
}

export function useInternetIdentity() {
  const context = useContext(InternetIdentityContext);
  if (!context) {
    throw new Error(
      'useInternetIdentity must be used within InternetIdentityProvider'
    );
  }
  return context;
}
