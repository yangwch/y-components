import React, { ReactNode, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

interface MotionProps {
  children?: ReactNode;
  open: boolean;
  transitionName?: string;
  transitionTimeout?: number;
  unmountOnExit?: boolean;
}
const CSSMotion = React.forwardRef<HTMLElement, MotionProps>(function (props, ref) {
  const {
    children,
    open: customOpen,
    transitionName,
    transitionTimeout = 200,
    unmountOnExit,
  } = props;
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(customOpen);
  }, [customOpen]);
  return (
    <CSSTransition
      unmountOnExit={unmountOnExit}
      nodeRef={ref}
      in={open}
      timeout={transitionTimeout}
      classNames={transitionName}
    >
      {children}
    </CSSTransition>
  );
});

export default CSSMotion;
