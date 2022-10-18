import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { settings } from '../utils/global';

const cls_prefix = settings.prefix;

interface RowProps {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
  span?: number;
  offset?: number;
}

function Col(props: RowProps) {
  const { children, className, style, span, offset } = props;
  const clsNames = classNames(
    {
      [`${cls_prefix}-col`]: true,
      [`${cls_prefix}-col-${span}`]: typeof span === 'number' && span >= 0 && span <= 24,
      [`${cls_prefix}-col-offset-${offset}`]:
        typeof offset === 'number' && offset > 0 && offset < 24,
    },
    className,
  );
  return (
    <div className={clsNames} style={style}>
      {children}
    </div>
  );
}

export default Col;
