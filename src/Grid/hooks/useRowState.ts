import { useContext } from 'react';
import { RowContext, RowContextState } from '../RowContext';

const useRowState = (): RowContextState => {
  const rowState = useContext(RowContext);
  return rowState;
};

export default useRowState;
