import classNames from 'classnames';
import React, { CSSProperties, MouseEvent } from 'react';

interface MaskProps {
  prefixCls: string;
  className?: string;
  style?: CSSProperties;
  visible?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

function Mask(props: MaskProps) {
  const { prefixCls, style, className, visible, onClick } = props;
  if (!visible) return null;
  const cls = classNames(`${prefixCls}-mask`, className);
  return <div className={cls} style={style} onClick={onClick}></div>;
}

export default Mask;
