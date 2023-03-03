import React, { CSSProperties, ReactNode, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
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

interface MotionProps {
  children?: ReactNode;
  open: boolean;
  transitionName?: string;
  transitionTimeout?: number;
}
const CSSMotion = React.forwardRef<HTMLElement, MotionProps>(function (props, ref) {
  const { children, open: customOpen, transitionName, transitionTimeout = 200 } = props;
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(customOpen);
  }, [customOpen]);
  return (
    <CSSTransition nodeRef={ref} in={open} timeout={transitionTimeout} classNames={transitionName}>
      {children}
    </CSSTransition>
  );
});

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
