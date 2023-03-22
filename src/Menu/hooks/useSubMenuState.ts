import { useContext } from 'react';
import { SubMenuContext } from '../context/SubMenuContext';

const useSubMenuState = () => {
  const state = useContext(SubMenuContext);

  return state;
};

export default useSubMenuState;
