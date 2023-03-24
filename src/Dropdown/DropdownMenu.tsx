import React from 'react';
import Divider from '../Divider';
import { Menu } from '../Menu';
import { DropdownMenuItem } from './interface';
interface DropdownMenuProps {
  menu: DropdownMenuItem[];
}
function DropdownMenu(props: DropdownMenuProps) {
  const { menu } = props;
  return (
    <Menu>
      {menu.map((item) => {
        const { node, name, ...attrs } = item;
        if (item.node === 'item') {
          return <Menu.Item {...attrs}>{item.name}</Menu.Item>;
        }
        if (item.node === 'divider') {
          return <Divider {...attrs}>{item.name}</Divider>;
        }
        if (item.node === 'group') {
          return <Menu.Group {...attrs}>{item.name}</Menu.Group>;
        }
        return null;
      })}
    </Menu>
  );
}

export default DropdownMenu;
