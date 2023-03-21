import classNames from 'classnames';
import React, { CSSProperties, MouseEvent, ReactNode, useRef } from 'react';
import { MENU_ITEM_PADDING } from '../constant/menu';
import { Placement } from '../Popup';
import { Tooltip } from '../Tooltip';
import CSSMotion from '../_utils/CSSMotion';
import { SubMenuContext } from './context/SubMenuContext';
import useKey from './hooks/useKey';
import useMenuState from './hooks/useMenuState';
import useSubMenuState from './hooks/useSubMenuState';
import { menuCls } from './Menu';

export interface SubMenuProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  title?: string | ReactNode;
  eventKey?: string;
}

const subMenuCls = `${menuCls}-submenu`;

function SubMenu(props: SubMenuProps) {
  const { style, children, className, title, eventKey: customKey } = props;

  const key = useKey(customKey);
  const { depth } = useSubMenuState();
  const {
    isOpen,
    isSelected,
    isActive,
    onToggle,
    expandIcon,
    transitionName,
    transitionTimeout,
    forceSubMenuRender,
    mode,
    onClickItem,
  } = useMenuState(key);

  const cls = classNames(
    subMenuCls,
    {
      [`${subMenuCls}-open`]: isOpen,
      [`${subMenuCls}-selected`]: isSelected,
      [`${subMenuCls}-active`]: isActive,
      [`${subMenuCls}-${mode}`]: mode,
    },
    className,
  );

  const renderExpandIcon = () => {
    if (mode === 'horizontal') {
      return null;
    }
    let icon: ReactNode = <i className={`${menuCls}-icon-arrow`}></i>;
    if (expandIcon) {
      icon = typeof expandIcon === 'function' ? expandIcon(isOpen, props) : expandIcon;
    }
    return <div className={`${menuCls}-expand-icon-container`}>{icon}</div>;
  };

  const listRef = useRef<HTMLUListElement | null>(null);
  const renderTitle = () => {
    const subMenuStyle = {
      ...style,
    };
    if (mode === 'inline' && depth > 1) {
      subMenuStyle.paddingLeft = MENU_ITEM_PADDING * depth;
    }
    const titleClickHandler = (e: MouseEvent<HTMLDivElement>) => {
      onToggle(key);
      onClickItem(key, props);
    };
    return (
      <div
        role="presentation"
        tab-index={-1}
        className={`${subMenuCls}-title`}
        title={typeof title === 'string' ? title : undefined}
        style={subMenuStyle}
        onClick={titleClickHandler}
      >
        {title}
        {renderExpandIcon()}
      </div>
    );
  };
  const renderSubMenu = () => {
    return (
      <SubMenuContext.Provider value={{ depth: depth + 1, mode }}>
        <ul role="group" ref={listRef} className={`${subMenuCls}-list`}>
          {children}
        </ul>
      </SubMenuContext.Provider>
    );
  };
  if (mode === 'horizontal' || mode === 'vertical') {
    const placement: Placement = mode === 'horizontal' && depth === 1 ? 'bottomLeft' : 'right';
    return (
      <Tooltip
        content={renderSubMenu()}
        placement={placement}
        arrow={false}
        onVisibleChange={(visible) => {
          onToggle(key, visible);
        }}
        color="#fff"
        className={`${subMenuCls}-tooltip`}
        contentStyle={{ padding: 0 }}
        visible={isOpen}
      >
        <li
          role="presentation"
          data-depth={depth}
          onClick={(e) => e.stopPropagation()}
          className={cls}
        >
          {renderTitle()}
        </li>
      </Tooltip>
    );
  }
  return (
    <li role="presentation" data-depth={depth} onClick={(e) => e.stopPropagation()} className={cls}>
      {renderTitle()}
      <CSSMotion
        unmountOnExit={!forceSubMenuRender}
        open={isOpen}
        ref={listRef}
        transitionName={transitionName}
        transitionTimeout={transitionTimeout}
      >
        {renderSubMenu()}
      </CSSMotion>
    </li>
  );
}

export { SubMenu };
