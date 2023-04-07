import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { calcVisibleCount, getDomWidth, getOverflowItemWidth } from '../utils';

interface Props<ItemType> {
  ref?: React.ForwardedRef<Element>;
  maxLength?: number;
  items: ItemType[];
}
const useVisibleCount = <ItemType>(props: Props<ItemType>) => {
  const { maxLength: customMaxLength, items, ref } = props;
  const [rootWidth, setRootWidth] = useState<number>(0);
  const [itemsSize, setItemsSize] = useState<Record<number, number>>({});
  const [suffixWidth, setSuffixWidth] = useState<number>(0);
  const [prefixWidth, setPrefixWidth] = useState<number>(0);
  const [restWidth, setRestWidth] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(0);

  const maxLength = useMemo(() => {
    if (typeof customMaxLength === 'number') {
      return Math.min(customMaxLength, visibleCount);
    }
    return Math.min(items.length, visibleCount);
  }, [items, customMaxLength, visibleCount]);

  const setItemSize = useCallback(
    (index: number, el: Element) => {
      const width = getOverflowItemWidth(el);
      setItemsSize((origin: Record<number, number>) => {
        if (origin[index] === width) {
          return origin;
        }
        return {
          ...origin,
          [index]: width,
        };
      });
    },
    [setItemsSize],
  );

  useLayoutEffect(() => {
    if (!rootWidth) {
      return;
    }
    if (!rootWidth) {
      if (visibleCount !== 0) {
        setVisibleCount(0);
      }
      return;
    }
    const currentVisibleCount = calcVisibleCount(
      rootWidth,
      restWidth,
      suffixWidth,
      prefixWidth,
      items.length,
      itemsSize,
    );
    if (visibleCount !== currentVisibleCount) {
      setVisibleCount(currentVisibleCount);
    }
  }, [maxLength, visibleCount, itemsSize, suffixWidth, prefixWidth, restWidth, rootWidth]);

  const setRestWidthHandler = useCallback(
    (el: Element) => {
      setRestWidth(getDomWidth(el));
    },
    [setRestWidth],
  );

  const setPrefixWidthHandler = useCallback(
    (el: Element) => {
      setPrefixWidth(getOverflowItemWidth(el));
    },
    [setPrefixWidth],
  );

  const setSuffixWidthHandler = useCallback(
    (el: Element) => {
      setSuffixWidth(getOverflowItemWidth(el));
    },
    [setSuffixWidth],
  );
  const setRootWidthHandler = useCallback(
    (el: Element) => {
      setRootWidth(getOverflowItemWidth(el));
    },
    [setRootWidth],
  );
  return {
    onRootWidthChange: setRootWidthHandler,
    maxLength,
    setItemSize,
    onRestWidthChange: setRestWidthHandler,
    onPrefixWidthChange: setPrefixWidthHandler,
    onSuffixWidthChange: setSuffixWidthHandler,
  };
};

export default useVisibleCount;
