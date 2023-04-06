import React, { useRef } from 'react';
import useObserve from '../_utils/observe/useObserve';
import { ComponentType } from './interface';

interface ItemProps {
  className: string;
  component?: ComponentType;
  children: React.ReactNode;
  onSizeChanged?: (el: Element) => void;
}

const defaultOnSizeChanged = (el: Element) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('onSizeChanged', el);
  }
};

function Item(props: ItemProps) {
  const ref = useRef<Element | null>(null);
  const { className, component: Component = 'div', onSizeChanged, children } = props;
  useObserve({ el: ref.current, onSizeChanged: onSizeChanged || defaultOnSizeChanged });
  return (
    <Component
      className={className}
      ref={(el: any) => {
        ref.current = el;
      }}
    >
      {children}
    </Component>
  );
}

export default Item;
