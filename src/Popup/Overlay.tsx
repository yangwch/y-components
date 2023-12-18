import React, { CSSProperties, PointerEvent, ReactNode } from 'react';
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
  onPointerEnter?: (e: PointerEvent) => void;
  onPointerLeave?: (e: PointerEvent) => void;
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
    onPointerEnter,
    onPointerLeave: onPointerOut,
  } = props;
  return (
    <Portal open={open} autoDestroy={autoDestroy} getContainer={getPopupContainer}>
      <CSSMotion
        open={!!open}
        transitionName={transitionName}
        transitionTimeout={transitionName ? transitionTimeout : 0}
      >
        <div
          style={style}
          ref={ref}
          className={className}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerOut}
        >
          {children}
        </div>
      </CSSMotion>
    </Portal>
  );
});

export default React.memo(Overlay);
