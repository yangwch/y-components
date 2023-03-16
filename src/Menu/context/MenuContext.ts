import React, { ReactNode } from 'react';
import { SubMenuProps } from '../SubMenu';

export interface MenuContextValue {
  selectedKeys: string[];
  multiple?: boolean;
  activeKey?: string;
  openKeys: string[];
  onCheckItem: (key: string) => void;
  onToggle: (key: string) => void;
  expandIcon?: ReactNode | ((isOpen: boolean, props: SubMenuProps) => React.ReactNode);
  transitionName?: string;
  transitionTimeout?: number;
  forceSubMenuRender?: boolean;
}

export const MenuContext = React.createContext<MenuContextValue | null>(null);
