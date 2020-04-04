import { useContext } from 'react';

import { HomeContext } from './context';

export const useHome = () => {
  const { hello } = useContext(HomeContext);
  return { hello };
};
