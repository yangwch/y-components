import React, { CSSProperties, MouseEvent, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import { settings } from './global';
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
  disableTransition?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
}

function Motion(props: MotionProps) {
  const {
    visible,
    timeout: customTimeout = 150,
    children,
    motionStyles: customTransitionStyles = transitionStyles,
    delay = 0,
    style,
    disableTransition,
    onClick,
  } = props;
  const timeout = disableTransition ? 0 : customTimeout;
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

  const motionClickHanlder = (e: MouseEvent<HTMLDivElement>) => {
    const t = e.target;
    if (t === nodeRef.current && onClick) {
      onClick(e);
    }
  };
  return (
    <Transition nodeRef={nodeRef} in={enter} timeout={timeout}>
      {(state) => (
        <div
          className={`${settings.prefix}-motion`}
          ref={nodeRef}
          style={{ ...defaultStyle, ...(customTransitionStyles[state] || {}), ...style }}
          onClick={motionClickHanlder}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

export default Motion;
