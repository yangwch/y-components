import React, { CSSProperties, ReactNode } from 'react';
import CSSMotion from '../_utils/CSSMotion';
import Portal, { GetContainer } from '../_utils/Portal';

interface Props {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  open?: boolean;
  autoDestroy?: boolean;
  getPopupContainer?: GetContainer;
  transitionName?: string;
  transitionTimeout?: number;
}

const Overlay = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    open,
    children,
    style,
    className,
    autoDestroy,
    getPopupContainer,
    transitionName = 'fade',
    transitionTimeout,
  } = props;
  return (
    <Portal open={open} autoDestroy={autoDestroy} getContainer={getPopupContainer}>
      <CSSMotion
        open={!!open}
        ref={ref}
        transitionName={transitionName}
        transitionTimeout={transitionName ? transitionTimeout : 0}
      >
        <div style={style} ref={ref} className={className}>
          {children}
        </div>
      </CSSMotion>
    </Portal>
  );
});

export default Overlay;
