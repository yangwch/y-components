import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

const transitionStyles: { [key: string]: CSSProperties } = {
  entering: { transform: 'scale(1, 1)' },
  entered: { transform: 'scale(1, 1)' },
  exiting: { transform: 'scale(0, 0)' },
  exited: { transform: 'scale(0, 0)' },
  unmounted: { transform: 'scale(0, 0)' },
};

interface MotionProps {
  visible: boolean;
  delay?: number;
  timeout?: number;
  children?: React.ReactNode;
  transitionStyles?: typeof transitionStyles;
}

function Motion(props: MotionProps) {
  const {
    visible,
    timeout = 150,
    children,
    transitionStyles: customTransitionStyles = transitionStyles,
    delay = 0
  } = props;
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const defaultStyle: CSSProperties = {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: 'scale(0, 0)',
    position: 'relative',
    zIndex: 1001,
  };
  const [enter, setEnter] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setEnter(visible);
    }, delay);
  }, [visible]);
  return (
    <Transition nodeRef={nodeRef} in={enter} timeout={timeout}>
      {(state) => (
        <div ref={nodeRef} style={{ ...defaultStyle, ...(customTransitionStyles[state] || {}) }}>
          {children}
        </div>
      )}
    </Transition>
  );
}

export default Motion;
