import React from 'react';
import { MenuMode } from '../Menu';

export interface SubMenuContextValue {
  depth: number;
  mode: MenuMode;
}

export const SubMenuContext = React.createContext<SubMenuContextValue>({
  depth: 1,
  mode: 'vertical',
});
