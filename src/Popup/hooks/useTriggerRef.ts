import { useCallback, useRef } from 'react';

const useTriggerRef = (ref?: React.ForwardedRef<HTMLElement>) => {
  const triggerRef = useRef<HTMLElement | null>(null);
  const setRef = useCallback(
    (el: HTMLElement) => {
      if (el) {
        triggerRef.current = el;
      }
      if (ref) {
        if (typeof ref === 'function') {
          ref(el);
        } else {
          ref.current = el;
        }
      }
    },
    [ref],
  );
  return {
    setRef,
    ref: triggerRef,
  };
};

export default useTriggerRef;
