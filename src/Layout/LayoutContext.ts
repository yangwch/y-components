import React, { useContext } from 'react';

export interface LayoutContextProps {
  addSider: (id: any) => void;
  removeSider: (id: any) => void;
}

const LayoutContext = React.createContext<LayoutContextProps>({
  addSider: (id: any) => null,
  removeSider: (id: any) => null,
});

export default LayoutContext;

export const useLayoutContext = () => {
  const contextValue = useContext<LayoutContextProps>(LayoutContext);
  if (!contextValue) {
    throw new Error(`Component should nested inside Layout`);
  }
  return contextValue;
};
