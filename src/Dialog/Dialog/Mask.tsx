import classNames from 'classnames';
import React, { CSSProperties } from 'react';

interface MaskProps {
  prefixCls: string;
  className?: string;
  style?: CSSProperties;
  visible?: boolean;
}

function Mask(props: MaskProps) {
  const { prefixCls, style, className, visible } = props;
  if (!visible) return null;
  const cls = classNames(`${prefixCls}-mask`, className);
  return <div className={cls} style={style}></div>;
}

export default Mask;
