import React, { CSSProperties, ReactNode } from 'react';
import { GetContainer } from './interface';
import Portal from './Portal';

interface Props {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  open?: boolean;
  autoDestroy?: boolean;
  getPopupContainer?: GetContainer;
}

const Overlay = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { open, children, style, className, autoDestroy, getPopupContainer } = props;
  return (
    <Portal open={open} autoDestroy={autoDestroy} getContainer={getPopupContainer}>
      <div style={style} ref={ref} className={className}>
        {children}
      </div>
    </Portal>
  );
});

export default Overlay;
