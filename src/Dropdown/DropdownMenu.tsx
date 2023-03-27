import React from 'react';
import Divider from '../Divider';
import { Menu } from '../Menu';
import identity from '../_utils/identity';
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
          return (
            <Menu.Item key={item.eventKey || `dropdown-${identity.create()}`} {...attrs}>
              {item.name}
            </Menu.Item>
          );
        }
        if (item.node === 'divider') {
          return (
            <Divider key={`dropdown-${identity.create()}`} {...attrs}>
              {item.name}
            </Divider>
          );
        }
        if (item.node === 'group') {
          return (
            <Menu.Group key={`dropdown-${identity.create()}`} {...attrs}>
              {item.name}
            </Menu.Group>
          );
        }
        return null;
      })}
    </Menu>
  );
}

export default DropdownMenu;
