import classNames from 'classnames';
import React, { CSSProperties, ReactNode } from 'react';
import { MENU_ITEM_PADDING } from '../constant/menu';
import useKey from './hooks/useKey';
import useMenuState from './hooks/useMenuState';
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
  const key = useKey(eventKey);
  const { isSelected, isActive, onClickItem } = useMenuState(key);
  const menuClassName = classNames(
    menuItemCls,
    {
      [`${menuItemCls}-${disabled}`]: disabled,
      [`${menuItemCls}-selected`]: isSelected,
      [`${menuItemCls}-active`]: isActive,
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
    <li
      role="menuitem"
      tabIndex={-1}
      style={listItemStyle}
      className={menuClassName}
      onClick={(e) => onClickItem(key, props)}
    >
      {children}
      {renderExpandIcon()}
    </li>
  );
}

export { MenuItem };
