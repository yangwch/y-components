import { useContext } from 'react';
import { SubMenuContext, SubMenuContextValue } from '../context/SubMenuContext';

const useSubMenuState = (): SubMenuContextValue => {
  const state = useContext(SubMenuContext);

  return state;
};

export default useSubMenuState;
