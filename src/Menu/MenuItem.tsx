import classNames from 'classnames';
import React, { CSSProperties, ReactNode } from 'react';
import { MENU_ITEM_PADDING } from '../constant/menu';
import useSubMenuState from './hooks/useSubMenuState';
import { menuCls } from './Menu';

export interface MenuItemProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  expandIcon?: ReactNode | ((props: MenuItemProps) => React.ReactNode);
  eventKey?: string;
}

export const menuItemCls = `${menuCls}-item`;

function MenuItem(props: MenuItemProps) {
  const { children, className, style, disabled, expandIcon, eventKey } = props;
  const { depth, mode } = useSubMenuState();
  const menuClassName = classNames(
    menuItemCls,
    {
      [`${menuCls}-${disabled}`]: disabled,
    },
    className,
  );
  const renderExpandIcon = () => {
    const expandIconCls = classNames(`${menuItemCls}-icon`, {
      [`${menuItemCls}-icon-arrow`]: !expandIcon,
    });
    if (!expandIcon) return <i className={expandIconCls}></i>;
    return (
      <i className={expandIconCls}>
        {typeof expandIcon === 'function' ? expandIcon(props) : expandIcon}
      </i>
    );
  };
  const listItemStyle = {
    ...style,
  };
  if (mode === 'inline') {
    listItemStyle.paddingLeft = MENU_ITEM_PADDING * depth;
  }
  return (
    <li style={listItemStyle} className={menuClassName}>
      {children}
      {renderExpandIcon()}
    </li>
  );
}

export { MenuItem };
