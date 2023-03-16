---
category: Components
type: 数据展示
title: Menu
toc: content
---

## Inline

```jsx
import React from 'react';
import { Menu, SubMenu, MenuItem } from '@yangwch/y-components';

export default () => {
  const renderExpandIcon = (isOpen) => {
    return <span style={{ marginLeft: 50 }}>{isOpen ? 'Close' : 'Open'}</span>;
  };
  return (
    <div>
      <Menu defaultOpenKeys={['1-3']} mode="inline">
        <MenuItem eventKey="1-1">Menu 1</MenuItem>
        <MenuItem eventKey="1-2">Menu 2</MenuItem>
        <SubMenu title="Menu 3" eventKey="1-3">
          <MenuItem eventKey="3-1">Menu 3-1</MenuItem>
          <MenuItem eventKey="3-2">Menu 3-2</MenuItem>
        </SubMenu>
        <MenuItem eventKey="1-4">Menu 4</MenuItem>

        <SubMenu title="Menu 5" eventKey="1-5">
          <MenuItem eventKey="5-1">Menu 5-1</MenuItem>
          <MenuItem eventKey="5-2">Menu 5-2</MenuItem>
          <SubMenu eventKey="5-3" title="Menu 5-3">
            <MenuItem eventKey="5-3-1">Menu 5-3-1</MenuItem>
            <MenuItem eventKey="5-3-2">Menu 5-3-2</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};
```

## vertical

```jsx
import React from 'react';
import { Menu, SubMenu, MenuItem } from '@yangwch/y-components';

export default () => {
  const renderExpandIcon = (isOpen) => {
    return <span style={{ marginLeft: 50 }}>{isOpen ? 'Close' : 'Open'}</span>;
  };
  return (
    <div>
      <Menu defaultOpenKeys={['1-3']} mode="vertical">
        <MenuItem eventKey="1-1">Menu 1</MenuItem>
        <MenuItem eventKey="1-2">Menu 2</MenuItem>
        <SubMenu title="Menu 3" eventKey="1-3">
          <MenuItem eventKey="3-1">Menu 3-1</MenuItem>
          <MenuItem eventKey="3-2">Menu 3-2</MenuItem>
        </SubMenu>
        <MenuItem eventKey="1-4">Menu 4</MenuItem>

        <SubMenu title="Menu 5" eventKey="1-5">
          <MenuItem eventKey="5-1">Menu 5-1</MenuItem>
          <MenuItem eventKey="5-2">Menu 5-2</MenuItem>
          <SubMenu eventKey="5-3" title="Menu 5-3">
            <MenuItem eventKey="5-3-1">Menu 5-3-1</MenuItem>
            <MenuItem eventKey="5-3-2">Menu 5-3-2</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};
```
