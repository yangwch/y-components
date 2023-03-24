---
category: Components
type: 数据展示
title: Dropdown
toc: content
---

## 基本

```jsx
import React from 'react';
import { Dropdown, Menu, Button, Divider, Space } from '@yangwch/y-components';
const { SubMenu, Item: MenuItem, Group: MenuGroup } = Menu;
export default () => {
  const renderMenus = () => {
    return (
      <Menu mode="inline">
        <MenuGroup>分组 1</MenuGroup>
        <MenuItem eventKey="1-1">Menu 1</MenuItem>
        <MenuItem eventKey="1-2" disabled>
          Menu 2: disabled
        </MenuItem>
        <Divider />
        <MenuGroup>分组 2</MenuGroup>
        <MenuItem eventKey="1-3">Menu 3</MenuItem>
        <MenuItem eventKey="1-4">Menu 4</MenuItem>
      </Menu>
    );
  };
  return (
    <Space style={{ marginBottom: 200 }}>
      <Dropdown render={renderMenus()} visible>
        <Button>始终显示</Button>
      </Dropdown>
      <Dropdown render={renderMenus()}>
        <Button>HOVER ME</Button>
      </Dropdown>
      <Dropdown render={renderMenus()} placement="bottom" arrow>
        <Button>自定义位置</Button>
      </Dropdown>
      <Dropdown render={renderMenus()} color="#c7cb7e1a">
        <Button>自定义样式</Button>
      </Dropdown>
    </Space>
  );
};
```

## JSON 使用方式

```jsx
import React from 'react';
import { Dropdown, Button } from '@yangwch/y-components';

const menu = [
  {
    node: 'item',
    name: 'Menu Item 1',
  },
  {
    node: 'item',
    name: 'Menu Item 2：disabled',
    active: true,
    disabled: true,
  },
  {
    node: 'divider',
  },
  {
    node: 'group',
    name: '分组 2',
  },
  {
    node: 'item',
    name: 'Menu Item 3',
  },
  {
    node: 'item',
    name: 'Menu Item 4',
  },
];
export default () => {
  return (
    <Dropdown menu={menu}>
      <Button>Hover me</Button>
    </Dropdown>
  );
};
```

## API

<API id="Dropdown" />
