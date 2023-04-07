import React, { useCallback } from 'react';

const useComposedRef = <T>(
  ...refs: (React.MutableRefObject<T> | React.ForwardedRef<T> | undefined)[]
) => {
  const onSetRef = useCallback(
    (el: T) => {
      const allRefs = refs;
      allRefs.forEach((refItem) => {
        if (!refItem) return;
        if (typeof refItem === 'function') {
          refItem(el);
        } else if (refItem) {
          refItem.current = el;
        }
      });
    },
    [...refs],
  );
  return onSetRef;
};

export default useComposedRef;
