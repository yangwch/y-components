import classNames from 'classnames';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { settings } from '../utils/global';
import { ResponsiveSizes } from '../_utils/responsive';
import useRowState from './hooks/useRowState';

const cls_prefix = settings.prefix;

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  span?: number;
  offset?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

const Col = React.forwardRef<HTMLDivElement, ColProps>((props: ColProps, ref) => {
  const { children, className, style, span, offset, ...rest } = props;

  const responsiveCls = ResponsiveSizes.reduce((prev, currentValue) => {
    const sizeValue = props[currentValue];
    if (sizeValue !== undefined) {
      delete rest[currentValue];
    }
    if (typeof sizeValue === 'number') {
      return {
        ...prev,
        [`${cls_prefix}-col-${currentValue}-${sizeValue}`]: true,
      };
    }
    return prev;
  }, {});
  const clsNames = classNames(
    {
      [`${cls_prefix}-col`]: true,
      [`${cls_prefix}-col-${span}`]: typeof span === 'number' && span >= 0 && span <= 24,
      [`${cls_prefix}-col-offset-${offset}`]:
        typeof offset === 'number' && offset > 0 && offset < 24,
    },
    responsiveCls,
    className,
  );
  const colStyle: CSSProperties = {};
  const { gutter } = useRowState();
  if (gutter && gutter[0] > 0) {
    colStyle.paddingLeft = gutter[0];
    colStyle.paddingRight = gutter[0];
  }
  if (gutter && gutter[1] > 0) {
    colStyle.paddingTop = gutter[1];
    colStyle.paddingBottom = gutter[1];
  }
  return (
    <div className={clsNames} style={{ ...colStyle, ...style }} ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default Col;
