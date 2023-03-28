import React from 'react';
import Divider from '../Divider';
import { Menu, MenuProps, SubMenu } from '../Menu';
import identity from '../_utils/identity';
import { DropdownMenuItem } from './interface';
interface DropdownMenuProps {
  menu: DropdownMenuItem[];
  menuProps: MenuProps;
}
function MenuItemRenderer(item: DropdownMenuItem) {
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
  if (item.node === 'submenu') {
    const { children, name, ...attrs } = item;
    return (
      <SubMenu title={name} {...attrs}>
        {children.map((child) => (
          <MenuItemRenderer
            key={`dropdown-key-${('eventKey' in child && child.eventKey) || identity.create()}`}
            {...child}
          />
        ))}
      </SubMenu>
    );
  }

  return null;
}
function DropdownMenu(props: DropdownMenuProps) {
  const { menu, menuProps } = props;
  return (
    <Menu {...menuProps}>
      {menu.map((item) => {
        return (
          <MenuItemRenderer
            key={`dropdown-key-${('eventKey' in item && item.eventKey) || identity.create()}`}
            {...item}
          />
        );
      })}
    </Menu>
  );
}

export default DropdownMenu;
