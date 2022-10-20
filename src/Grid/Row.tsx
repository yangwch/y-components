import classNames from 'classnames';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { settings } from '../utils/global';
import { RowContext } from './RowContext';
import './style/index.less';

const cls_prefix = settings.prefix;

type Alignment = 'top' | 'middle' | 'bottom'
type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  wrap?: boolean;
  align?: Alignment
  justify?: Justify
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props: RowProps, ref) => {
  const { children, className, style, wrap = true, align, justify } = props;
  const clsNames = classNames(
    `${cls_prefix}-row`,
    {
      [`${cls_prefix}-row${wrap ? '' : '-nowrap'}`]: wrap === false,
      [`${cls_prefix}-row-${align}`]: !!align,
      [`${cls_prefix}-row-${justify}`]: !!justify
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
