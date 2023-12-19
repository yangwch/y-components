import { useEffect } from 'react';
import { observe, unobserve } from './observerUtil';

interface ObserveOptions {
  ref: React.RefObject<Element | null>;
  onSizeChanged: (el: Element) => void;
}
function useObserve(options: ObserveOptions) {
  const { ref, onSizeChanged } = options;
  useEffect(() => {
    if (ref.current) {
      observe(ref.current, onSizeChanged);
      return () => {
        if (ref.current) {
          unobserve(ref.current, onSizeChanged);
        }
      };
    }
  }, [onSizeChanged]);
}

export default useObserve;
