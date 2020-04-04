import React, { createContext } from 'react';

export const HomeContext = createContext({});

export const HomeProvider = (props) => {
  const context = {
    hello: 'Hello world!',
  };

  return <HomeContext.Provider value={context} {...props} />;
};
