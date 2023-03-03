import classNames from 'classnames';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { settings } from '../_utils/global';
import { RowContext } from './RowContext';
import './style/index.less';

const cls_prefix = settings.prefix;

type Alignment = 'top' | 'middle' | 'bottom';
export type Justify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 行内样式
   * @type React.CSSProperties
   */
  style?: CSSProperties;
  /**
   * @description 是否自动换行
   * @default 'true'
   */
  wrap?: boolean;
  /**
   * @description flex 布局下的垂直对齐方式： "top" | "middle" | "bottom"
   */
  align?: Alignment;
  /**
   * @description flex 布局下的水平排列方式："start" | "end" | "center" | "space-around" | "space-between" | "space-evenly"
   */
  justify?: Justify;
  /**
   * @description 栅格间隔: [水平间距, 垂直间距]
   */
  gutter?: [number, number];
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props: RowProps, ref) => {
  const { children, className, style, wrap = true, align, justify, gutter } = props;
  const clsNames = classNames(
    `${cls_prefix}-row`,
    {
      [`${cls_prefix}-row${wrap ? '' : '-nowrap'}`]: wrap === false,
      [`${cls_prefix}-row-${align}`]: !!align,
      [`${cls_prefix}-row-${justify}`]: !!justify,
    },
    className,
  );

  // Add gutter related style
  const rowStyle: React.CSSProperties = {};
  if (gutter) {
    const horizontalGutter = gutter[0] != null && gutter[0] > 0 ? gutter[0] / -2 : undefined;
    const verticalGutter = gutter[1] != null && gutter[1] > 0 ? gutter[1] / -2 : undefined;
    if (horizontalGutter) {
      rowStyle.marginLeft = horizontalGutter;
      rowStyle.marginRight = horizontalGutter;
    }
    rowStyle.rowGap = verticalGutter;
  }

  return (
    <RowContext.Provider value={{ gutter: gutter && [gutter[0] / 2, gutter[1] / 2] }}>
      <div className={clsNames} style={{ ...rowStyle, ...style }} ref={ref}>
        {children}
      </div>
    </RowContext.Provider>
  );
});

export default Row;
