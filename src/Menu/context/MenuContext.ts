import React, { ReactNode } from 'react';
import { MenuMode } from '../Menu';
import { MenuItemProps } from '../MenuItem';
import { SubMenuProps } from '../SubMenu';

export interface MenuContextValue {
  mode: MenuMode;
  selectedKeys: string[];
  multiple?: boolean;
  activeKey?: string;
  openKeys: string[];
  onClickItem: (key: string, props?: MenuItemProps | SubMenuProps) => void;
  onToggle: (key: string, visible?: boolean) => void;
  expandIcon?: ReactNode | ((isOpen: boolean, props: SubMenuProps) => React.ReactNode);
  transitionName?: string;
  transitionTimeout?: number;
  forceSubMenuRender?: boolean;
}

export const MenuContext = React.createContext<MenuContextValue | null>(null);
