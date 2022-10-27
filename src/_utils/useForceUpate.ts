import { useReducer } from 'react';

const useForceUpdate = () => {
  const [, dispatch] = useReducer((state) => state + 1, 0);
  return () => dispatch();
};

export default useForceUpdate;
