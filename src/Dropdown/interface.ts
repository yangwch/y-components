import { ReactNode } from 'react';
import { DividerProps } from '../Divider';
import { MenuGroupProps, MenuItemProps, MenuProps, SubMenuProps } from '../Menu';
import { Placement } from '../Popup';
import { TooltipProps } from '../Tooltip';

interface DropdownProps extends TooltipProps {
  /**
   * 自定义弹出内容
   * @type () => ReactNode | ReactNode
   */
  render?: () => ReactNode | ReactNode;
  /**
   * 弹出位置
   * @default 'bottomLeft'
   */
  placement?: Placement;
  /**
   * 是否显示箭头
   * @default 'false'
   */
  arrow?: boolean;
  /**
   * 弹出背景色
   * @default '#fff'
   */
  color?: string;
  /**
   * 传入JSON，快速配置Dropdown内容
   * @type DropdownMenuItem[]
   */
  menu?: DropdownMenuItem[];
  /**
   * json使用方式给传给Menu的属性
   * @type MenuProps
   */
  menuProps: MenuProps;
}

interface MenuItem extends Omit<MenuItemProps, 'children'> {
  node: 'item';
  name?: string;
}

interface MenuGroup extends Omit<MenuGroupProps, 'children'> {
  node: 'group';
  name?: string;
}

interface SubMenu extends Omit<SubMenuProps, 'children' | 'title'> {
  node: 'submenu';
  name?: string;
  children: DropdownMenuItem[];
}

interface Divider extends Omit<DividerProps, 'children'> {
  node: 'divider';
  name?: string;
}

type DropdownMenuItem = MenuItem | SubMenu | MenuGroup | Divider;

export { DropdownProps, DropdownMenuItem };
