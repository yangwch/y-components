import classNames from 'classnames';
import React, { CSSProperties } from 'react';

interface RowProps {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties
}

function Col(props: RowProps) {
  const { children, className, style } = props;
  const clsNames = classNames(className);
  return <div className={clsNames} style={style}>{children}</div>;
}

export default Col;
