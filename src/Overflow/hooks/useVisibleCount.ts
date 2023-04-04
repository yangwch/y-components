import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { calcVisibleCount, getDomWidth } from '../utils';

interface Props<ItemType> {
  ref?: React.ForwardedRef<Element>;
  maxLength?: number;
  items: ItemType[];
}
const useVisibleCount = <ItemType>(props: Props<ItemType>) => {
  const { maxLength: customMaxLength, items, ref } = props;
  const rootRef = useRef<Element | null>(null);
  const restRef = useRef<Element | null>(null);
  const itemsRef = useRef<Record<number, Element>>({});
  const suffixRef = useRef<Element | null>(null);
  const prefixRef = useRef<Element | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(0);

  const rootRefHandler = useCallback(
    (el: Element) => {
      rootRef.current = el;
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

  const maxLength = useMemo(() => {
    if (typeof customMaxLength === 'number') {
      return Math.min(customMaxLength, visibleCount);
    }
    return Math.min(items.length, visibleCount);
  }, [items, customMaxLength, visibleCount]);

  const setItemRef = useCallback((index: number, el: Element) => {
    itemsRef.current[index] = el;
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current) {
      return;
    }
    const rootWidth = getDomWidth(rootRef.current);
    if (!rootWidth) {
      if (visibleCount !== 0) {
        setVisibleCount(0);
      }
      return;
    }
    const restWidth = restRef.current ? getDomWidth(restRef.current) : 0;
    const suffixWidth = suffixRef.current ? getDomWidth(suffixRef.current) : 0;
    const prefixWidth = prefixRef.current ? getDomWidth(prefixRef.current) : 0;
    const currentVisibleCount = calcVisibleCount(
      rootWidth,
      restWidth,
      suffixWidth,
      prefixWidth,
      items.length,
      itemsRef.current,
    );
    if (visibleCount !== currentVisibleCount) {
      setVisibleCount(currentVisibleCount);
    }
  }, [maxLength, visibleCount, items]);
  return {
    composedRef: rootRefHandler,
    maxLength,
    setItemRef,
    restRef,
    suffixRef,
    prefixRef,
  };
};

export default useVisibleCount;
