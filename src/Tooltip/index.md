---
category: Components
type: 数据展示
title: Tooltip
toc: content
---

## 基本

```jsx
import React from 'react';
import { Tooltip, Space, Button, Switch, Divider } from '@yangwch/y-components';

const placeList = ['topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'right'];
export default () => {
  const [arrow, setArrow] = React.useState(true);
  const content = (
    <div>
      <p>Tooltip Content</p>
      <p>Tooltip Content</p>
    </div>
  );
  return (
    <div>
      <Space>
        Show Arrow: <Switch defaultChecked={arrow} onChange={setArrow} />
      </Space>
      <Divider />
      <Space size={50} wrap>
        {placeList.map((placement) => (
          <Tooltip content={content} placement={placement} arrow={arrow}>
            <Button>{placement}</Button>
          </Tooltip>
        ))}
      </Space>
    </div>
  );
};
```

## 自定义样式

```jsx
import React from 'react';
import { Tooltip, Space, Button, Switch, Divider } from '@yangwch/y-components';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'magenta',
  'gold',
  'lime',
];
export default () => {
  return (
    <Space wrap>
      {colors.map((color) => (
        <Tooltip content="Tooltip Content" color={color} key="color">
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
  );
};
```
