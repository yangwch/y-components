import classNames from 'classnames';
import React, { CSSProperties, ReactNode, useMemo, useRef } from 'react';
import { MENU_ITEM_PADDING } from '../constant/menu';
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
  } = useMenuState(key);

  const cls = classNames(
    subMenuCls,
    {
      [`${subMenuCls}-open`]: isOpen,
      [`${subMenuCls}-selected`]: isSelected,
      [`${subMenuCls}-active`]: isActive,
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
  return (
    <li role="presentation" onClick={(e) => e.stopPropagation()} className={cls}>
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
      <SubMenuContext.Provider value={{ depth: depth + 1 }}>
        <CSSMotion
          unmountOnExit={!forceSubMenuRender}
          open={isOpen}
          ref={listRef}
          transitionName={transitionName}
          transitionTimeout={transitionTimeout}
        >
          <ul role="group" ref={listRef} className={`${subMenuCls}-list`}>
            {children}
          </ul>
        </CSSMotion>
      </SubMenuContext.Provider>
    </li>
  );
}

export { SubMenu };
