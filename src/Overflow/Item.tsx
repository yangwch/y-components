import React, { CSSProperties, useRef } from 'react';
import useObserve from '../_utils/observe/useObserve';
import useComposedRef from '../_utils/useComposedRef';
import { ComponentType } from './interface';

interface ItemProps {
  className: string;
  style?: CSSProperties;
  component?: ComponentType;
  children: React.ReactNode;
  onSizeChanged?: (el: Element) => void;
}

const defaultOnSizeChanged = (el: Element) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('onSizeChanged', el);
  }
};

function Item(props: ItemProps, ref: React.ForwardedRef<Element>) {
  const { className, style, component: Component = 'div', onSizeChanged, children } = props;
  const compRef = useRef<Element | null>(null);
  const onSetRef = useComposedRef<Element>(compRef, ref);
  useObserve({ ref: compRef, onSizeChanged: onSizeChanged || defaultOnSizeChanged });
  return (
    <Component className={className} style={style} ref={onSetRef}>
      {children}
    </Component>
  );
}

export default React.forwardRef(Item);
