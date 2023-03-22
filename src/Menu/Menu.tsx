import classNames from 'classnames';
import React, { CSSProperties, ReactNode, startTransition, useCallback } from 'react';
import { settings } from '../_utils/global';
import { MenuContext } from './context/MenuContext';
import useControlState from './hooks/useControlState';
import './style/index.less';
import { SubMenuProps } from './SubMenu';

export const menuCls = `${settings.prefix}-menu`;
export type MenuMode = 'vertical' | 'horizontal' | 'inline';

export interface MenuProps {
  children: React.ReactNode;
  mode?: MenuMode;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  multiple?: boolean;
  activeKey?: string;
  selectedKeys: string[];
  defaultSelectedKeys?: string[];
  openKeys?: string[];
  defaultOpenKeys?: string[];
  expandIcon?: ReactNode | ((isOpen: boolean, props: SubMenuProps) => React.ReactNode);
  transitionName?: string;
  transitionTimeout?: number;
  forceSubMenuRender?: boolean;
}

function InternalMenu(props: MenuProps, ref?: React.LegacyRef<HTMLUListElement>) {
  const {
    children,
    mode = 'vertical',
    className,
    style,
    multiple,
    selectedKeys: customSelectedKeys,
    defaultSelectedKeys,
    openKeys: customOpenKeys,
    defaultOpenKeys,
    activeKey: customActiveKey,
    expandIcon,
    transitionName = 'collapse',
    transitionTimeout = 200,
    forceSubMenuRender,
  } = props;

  const [activeKey, setActiveKey] = React.useState<string | undefined>(customActiveKey);

  const {
    isControlled: isControlledSelected,
    values: selectedKeys,
    setValues: setSelectedKeys,
  } = useControlState({
    controlKeys: customSelectedKeys,
    defaultControlKeys: defaultSelectedKeys,
  });

  const {
    isControlled: isControlledOpenKeys,
    values: openKeys,
    setValues: setOpenKeys,
  } = useControlState({
    controlKeys: customOpenKeys,
    defaultControlKeys: defaultOpenKeys,
  });

  const menuClassName = classNames(
    menuCls,
    {
      [`${menuCls}-${mode}`]: !!mode,
    },
    className,
  );

  const onClickItem = useCallback(
    (key: string) => {
      console.log('check item', key);
      startTransition(() => {
        const isSelected = selectedKeys.includes(key);
        if (isSelected) {
          setSelectedKeys(selectedKeys.filter((k) => k !== key));
          setActiveKey('');
        } else {
          setSelectedKeys(selectedKeys.concat(key));
          setActiveKey(key);
        }
      });
    },
    [multiple, selectedKeys],
  );

  const toggleHandler = useCallback(
    (key: string, visible?: boolean) => {
      if (isControlledOpenKeys) return;

      setOpenKeys((prevKeys) => {
        // 传了visible
        if (typeof visible === 'boolean') {
          if (visible) {
            return prevKeys.includes(key) ? prevKeys : prevKeys.concat(key);
          }
          return prevKeys.filter((k) => k !== key);
        }
        // 未传visible toggles visibility
        if (prevKeys.includes(key)) {
          return prevKeys.filter((k) => k !== key);
        }
        return prevKeys.concat(key);
      });
    },
    [setOpenKeys, isControlledOpenKeys],
  );
  return (
    <MenuContext.Provider
      value={{
        mode,
        selectedKeys,
        multiple,
        activeKey,
        openKeys,
        onClickItem,
        onToggle: toggleHandler,
        expandIcon,
        transitionName,
        transitionTimeout,
        forceSubMenuRender,
      }}
    >
      <ul style={style} className={menuClassName} ref={ref}>
        {children}
      </ul>
    </MenuContext.Provider>
  );
}

export const Menu = React.forwardRef(InternalMenu);
