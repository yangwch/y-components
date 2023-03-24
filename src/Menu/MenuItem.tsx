import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { MENU_ITEM_PADDING } from '../constant/menu';
import { menuItemCls } from './constant';
import useKey from './hooks/useKey';
import useMenuState from './hooks/useMenuState';
import useSubMenuState from './hooks/useSubMenuState';

export interface MenuItemProps {
  children: React.ReactNode;
  /**
   * 类名
   */
  className?: string;
  /**
   * 行内样式
   */
  style?: CSSProperties;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  // expandIcon?: ReactNode | ((props: MenuItemProps) => React.ReactNode);
  /**
   * 唯一标识
   */
  eventKey?: string;
}

function MenuItem(props: MenuItemProps) {
  const { children, className, style, disabled, eventKey } = props;
  const { depth, mode } = useSubMenuState();
  const key = useKey(eventKey);
  const { isSelected, isActive, onClickItem } = useMenuState(key);
  const menuClassName = classNames(
    menuItemCls,
    {
      [`${menuItemCls}-disabled`]: disabled,
      [`${menuItemCls}-selected`]: isSelected,
      [`${menuItemCls}-active`]: isActive,
    },
    className,
  );
  // const renderExpandIcon = () => {
  //   const expandIconCls = classNames(`${menuItemCls}-icon`, {
  //     [`${menuItemCls}-icon-arrow`]: !expandIcon,
  //   });
  //   if (!expandIcon) return <i className={expandIconCls}></i>;
  //   return (
  //     <i className={expandIconCls}>
  //       {typeof expandIcon === 'function' ? expandIcon(props) : expandIcon}
  //     </i>
  //   );
  // };
  const listItemStyle = {
    ...style,
  };
  if (mode === 'inline') {
    listItemStyle.paddingLeft = MENU_ITEM_PADDING * depth;
  }

  const menuItemClickHandler = () => {
    if (disabled) {
      return;
    }
    onClickItem(key, props);
  };
  return (
    <li
      data-key={key}
      role="menuitem"
      tabIndex={-1}
      style={listItemStyle}
      className={menuClassName}
      onClick={menuItemClickHandler}
    >
      {children}
      {/* {renderExpandIcon()} */}
    </li>
  );
}

export { MenuItem };
