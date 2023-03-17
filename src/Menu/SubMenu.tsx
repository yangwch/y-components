import classNames from 'classnames';
import React, { CSSProperties, ReactNode, useMemo, useRef } from 'react';
import { MENU_ITEM_PADDING } from '../constant/menu';
import { Placement } from '../Popup';
import { Tooltip } from '../Tooltip';
import CSSMotion from '../_utils/CSSMotion';
import identity from '../_utils/identity';
import { SubMenuContext } from './context/SubMenuContext';
import useDepth from './hooks/useDepth';
import useMenuState from './hooks/useMenuState';
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

  const key = useMemo<string>(() => customKey || `yc-key-${identity.create()}`, [customKey]);
  const depth = useDepth();
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
    let icon: ReactNode = <i className={`${menuCls}-icon-arrow`}></i>;
    if (expandIcon) {
      icon = typeof expandIcon === 'function' ? expandIcon(isOpen, props) : expandIcon;
    }
    return <div className={`${menuCls}-expand-icon-container`}>{icon}</div>;
  };

  const listRef = useRef<HTMLUListElement | null>(null);
  const renderTitle = () => {
    return (
      <div
        role="presentation"
        className={`${subMenuCls}-title`}
        title={typeof title === 'string' ? title : undefined}
        style={{ paddingLeft: MENU_ITEM_PADDING * depth, ...style }}
        onClick={() => onToggle(key)}
      >
        {title}
        {renderExpandIcon()}
      </div>
    );
  };
  const renderSubMenu = () => {
    return (
      <ul role="group" ref={listRef} className={`${subMenuCls}-list`}>
        {children}
      </ul>
    );
  };
  if (mode === 'horizontal' || mode === 'vertical') {
    const placement: Placement = mode === 'horizontal' ? 'bottomLeft' : 'right';
    return (
      <Tooltip
        content={renderSubMenu()}
        placement={placement}
        arrow={false}
        onVisibleChange={(visible) => {
          onToggle(key);
        }}
        color="#fff"
        style={{ color: '#000' }}
        contentStyle={{ padding: 0 }}
      >
        <li role="presentation" onClick={(e) => e.stopPropagation()} className={cls}>
          {renderTitle()}
        </li>
      </Tooltip>
    );
  }
  return (
    <li role="presentation" onClick={(e) => e.stopPropagation()} className={cls}>
      {renderTitle()}
      <SubMenuContext.Provider value={{ depth: depth + 1 }}>
        <CSSMotion
          unmountOnExit={!forceSubMenuRender}
          open={isOpen}
          ref={listRef}
          transitionName={transitionName}
          transitionTimeout={transitionTimeout}
        >
          {renderSubMenu()}
        </CSSMotion>
      </SubMenuContext.Provider>
    </li>
  );
}

export { SubMenu };
