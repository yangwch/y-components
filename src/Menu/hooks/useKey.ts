import { useMemo } from 'react';
import identity from '../../_utils/identity';

const useKey = (customKey?: string) => {
  const key = useMemo<string>(() => customKey || `yc-key-${identity.create()}`, [customKey]);

  return key;
};

export default useKey;
