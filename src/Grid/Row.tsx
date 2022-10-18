import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { settings } from '../utils/global';
import { RowContext } from './RowContext';
import './style/index.less';

const cls_prefix = settings.prefix;

interface RowProps {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
  wrap?: boolean;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props: RowProps, ref) => {
  const { children, className, style, wrap = true } = props;
  const clsNames = classNames(
    `${cls_prefix}-row`,
    {
      [`${cls_prefix}-row${wrap ? '' : '-nowrap'}`]: wrap === false,
    },
    className,
  );
  return (
    <RowContext.Provider value={{ gutter: [0, 0] }}>
      <div className={clsNames} style={style} ref={ref}>
        {children}
      </div>
    </RowContext.Provider>
  );
});

export default Row;
