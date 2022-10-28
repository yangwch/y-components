import { useEffect, useRef } from 'react';

const useMountCall = (callback: () => void, deps: any[] = []) => {
  const mountRef = useRef<boolean>(false);
  if (!mountRef.current) {
    callback();
  }
  useEffect(() => {
    if (mountRef.current) {
      callback()
    }
    mountRef.current = true
  }, deps)
};

export default useMountCall;
