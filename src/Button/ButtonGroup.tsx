import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { settings } from '../_utils/global';
import { sizeClassNameMap, SizeType } from '../_utils/size';
import SizeContext from './SizeContext';

interface ButtonGroupProps {
  /**
   * @description 按钮尺寸："small" | "middle" | "large"
   */
  size?: SizeType;
  children?: React.ReactNode;
  /**
   * @description 样式
   * @type React.CSSProperties
   */
  style?: CSSProperties;
  /**
   * @description 类名
   */
  className?: string;
}
const groupCls = `${settings.prefix}-btn-group`;

function ButtonGroup(props: ButtonGroupProps) {
  const { size: customizeSize, children, className, style } = props;
  const classes = classNames(groupCls, className, {
    [`${groupCls}-${customizeSize}`]: `${customizeSize}` in sizeClassNameMap,
  });
  return (
    <SizeContext.Provider value={customizeSize}>
      <div className={classes} style={style}>
        {children}
      </div>
    </SizeContext.Provider>
  );
}

export default ButtonGroup;
