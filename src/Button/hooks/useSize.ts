import { useContext } from 'react';
import { SizeType } from '../../_utils/size';
import SizeContext from '../SizeContext';

const useSize = (size: SizeType) => {
  const contextSize = useContext(SizeContext)

  return contextSize || size
};

export default useSize;
