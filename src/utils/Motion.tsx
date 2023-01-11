import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
export interface MotionStyles {
  entering?: CSSProperties;
  entered?: CSSProperties;
  exiting?: CSSProperties;
  exited?: CSSProperties;
  unmounted?: CSSProperties;
}

const transitionStyles: MotionStyles = {
  entering: { transform: 'scale(1.2, 1.2)' },
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
  motionStyles?: MotionStyles;
  style?: CSSProperties;
}

function Motion(props: MotionProps) {
  const {
    visible,
    timeout = 150,
    children,
    motionStyles: customTransitionStyles = transitionStyles,
    delay = 0,
    style,
  } = props;
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const defaultStyle: CSSProperties = {
    transition: `transform ${timeout}ms ease-in-out`,
    transform: 'scale(0, 0)',
    position: 'relative',
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
        <div
          ref={nodeRef}
          style={{ ...defaultStyle, ...(customTransitionStyles[state] || {}), ...style }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

export default Motion;
