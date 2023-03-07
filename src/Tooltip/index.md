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
        <Tooltip trigger={['click']} content={content} arrow={arrow}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topLeft" content={content} arrow={arrow}>
          <Button>TopLeft</Button>
        </Tooltip>
        <Tooltip placement="topRight" content={content} arrow={arrow}>
          <Button>TopRight</Button>
        </Tooltip>

        <Tooltip placement="bottom" content={content} arrow={arrow}>
          <Button>Bottom</Button>
        </Tooltip>

        <Tooltip placement="bottomLeft" content={content} arrow={arrow}>
          <Button>BottomLeft</Button>
        </Tooltip>

        <Tooltip placement="bottomRight" content={content} arrow={arrow}>
          <Button>BottomRight</Button>
        </Tooltip>

        <Tooltip placement="left" trigger={['click']} content={content} arrow={arrow}>
          <Button>Left</Button>
        </Tooltip>

        <Tooltip placement="right" trigger={['click']} content={content} arrow={arrow}>
          <Button>Right</Button>
        </Tooltip>
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
