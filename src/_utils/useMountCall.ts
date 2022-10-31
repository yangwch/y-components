import { useEffect, useLayoutEffect, useRef } from 'react';

const useMountCall = (callback: () => void, deps: any[] = []) => {
  const mountRef = useRef<boolean>(false);
  useLayoutEffect(() => {
    if (!mountRef.current) {
      callback();
    }
    mountRef.current = true
  }, [])
};

export default useMountCall;
