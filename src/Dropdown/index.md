---
category: Components
type: 数据展示
title: Dropdown
toc: content
---

## 基本

```jsx
import React from 'react';
import {
  Dropdown,
  Menu,
  SubMenu,
  MenuItem,
  MenuGroup,
  Button,
  Divider,
} from '@yangwch/y-components';

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
    <Dropdown render={renderMenus()}>
      <Button>hover me</Button>
    </Dropdown>
  );
};
```
