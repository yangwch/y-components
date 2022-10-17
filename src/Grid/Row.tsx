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
  nowrap?: boolean;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props: RowProps, ref) => {
  const { children, className, style, nowrap } = props;
  const clsNames = classNames(
    {
      [`${cls_prefix}-row`]: true,
      [`${cls_prefix}-row${nowrap ? '-nowrap' : ''}`]: nowrap,
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
