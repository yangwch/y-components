import { useContext } from 'react';
import { SubMenuContext } from '../context/SubMenuContext';

const useDepth = () => {
  const subMenuContext = useContext(SubMenuContext);

  return subMenuContext.depth;
};

export default useDepth;
