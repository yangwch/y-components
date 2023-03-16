import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

const useMenuState = (key: string) => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a Menu');
  }
  const isSelected: boolean = context.selectedKeys.includes(key);
  const isOpen: boolean = context.openKeys.includes(key);
  const isActive: boolean = context.activeKey ? context.activeKey === key : false;
  return {
    isSelected,
    isOpen,
    isActive,
    ...context,
  };
};

export default useMenuState;
