import { useCallback, useState } from 'react';

const useChildKeys = () => {
  const [childKeys, setChildKeys] = useState<string[]>([]);

  const addChild = useCallback((childKey: string) => {
    setChildKeys((prev) => prev.concat(childKey));
  }, []);
  const removeChild = useCallback((key: string) => {
    setChildKeys((prev) => prev.filter((k) => k !== key));
  }, []);

  return { addChild, removeChild, childKeys };
};

export default useChildKeys;
