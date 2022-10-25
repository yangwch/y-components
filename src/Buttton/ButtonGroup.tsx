import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { settings } from '../utils/global';
import { sizeClassNameMap, SizeType } from '../_utils/size';
import SizeContext from './SizeContext';

interface ButtonGroupProps {
  size?: SizeType;
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string
}
const groupCls = `${settings.prefix}-button-group`


function ButtonGroup(props: ButtonGroupProps) {
  const { size: customizeSize, children, className, style } = props;
  const classes = classNames(groupCls, className, {
    [`${groupCls}-${customizeSize}`]: `${customizeSize}` in sizeClassNameMap
  })
  return (
    <SizeContext.Provider value={customizeSize}>
      <div className={classes} style={style}>{children}</div>;
    </SizeContext.Provider>
  );
}

export default ButtonGroup;
