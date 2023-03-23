import classNames from 'classnames';
import React, { CSSProperties, ReactNode, startTransition, useCallback } from 'react';
import { menuCls } from './constant';
import { MenuContext } from './context/MenuContext';
import useControlState from './hooks/useControlState';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import './style/index.less';
import { SubMenu, SubMenuProps } from './SubMenu';

type MenuMode = 'vertical' | 'horizontal' | 'inline';

interface MenuProps {
  children: React.ReactNode;
  /**
   * 展示方式
   * @type "vertical" | "horizontal" | "inline"
   * @default vertical
   */
  mode?: MenuMode;
  /**
   * 类名
   */
  className?: string;
  /**
   * 行内样式
   */
  style?: CSSProperties;
  // disabled?: boolean;
  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 默认激活项
   */
  activeKey?: string;
  /**
   * 选中项，受控模式
   * @type string[]
   */
  selectedKeys: string[];
  /**
   * 默认选中项
   * @type string[]
   */
  defaultSelectedKeys?: string[];
  /**
   * 展开节点，受控模式
   */
  openKeys?: string[];
  /**
   * 默认展开节点
   */
  defaultOpenKeys?: string[];
  /**
   * 自定义收起/展开图标
   */
  expandIcon?: ReactNode | ((isOpen: boolean, props: SubMenuProps) => React.ReactNode);
  /**
   * 动画
   * @default 'collapse'
   */
  transitionName?: string;
  /**
   * 动画时长
   * @default 200
   */
  transitionTimeout?: number;
  /**
   * 是否默认渲染未展开的节点
   * @default false
   */
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
interface CompoundedComponent extends React.ForwardRefExoticComponent<MenuProps> {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
  Group: typeof MenuGroup;
}
const Menu = React.forwardRef(InternalMenu) as CompoundedComponent;

Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.Group = MenuGroup;

export { Menu, MenuProps, MenuMode };
