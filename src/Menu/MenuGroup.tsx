import classNames from 'classnames';
import React, { CSSProperties, ReactNode } from 'react';
import { MENU_ITEM_PADDING } from '../constant/menu';
import { menuCls } from './constant';
import useSubMenuState from './hooks/useSubMenuState';

export interface MenuGroupProps {
  children: ReactNode;
  /**
   * 类名
   */
  className?: string;
  /**
   * 行内样式
   */
  style?: CSSProperties;
}

export function MenuGroup(props: MenuGroupProps) {
  const { children, className, style } = props;

  const { depth, mode } = useSubMenuState();
  const groupStyle = {
    ...style,
  };
  if (mode === 'inline') {
    groupStyle.paddingLeft = MENU_ITEM_PADDING * depth;
  }
  const cls = classNames(`${menuCls}-group`, className);
  return (
    <div className={cls} style={groupStyle}>
      {children}
    </div>
  );
}
