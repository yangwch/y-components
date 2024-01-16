---
category: Components
type: 数据展示
title: Tooltip
toc: content
---

## 基本

```jsx
import React from 'react';
import { Tooltip, Space, Button as YCButton, Switch, Divider } from '@yangwch/y-components';
import styled from 'styled-components';

const buttonWidth = 80;
const Button = styled(YCButton)`
  width: ${buttonWidth}px;
  margin: 5px;
`;

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
      <div style={{ marginInlineStart: buttonWidth + 4, whiteSpace: 'nowrap' }}>
        <Tooltip placement="topLeft" content={content} arrow={arrow}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top" content={content} arrow={arrow}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" content={content} arrow={arrow}>
          <Button>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'inline-start' }}>
        <Tooltip placement="leftTop" content={content} arrow={arrow}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" content={content} arrow={arrow}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" content={content} arrow={arrow}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, marginInlineStart: buttonWidth * 4 + 24 }}>
        <Tooltip placement="rightTop" content={content} arrow={arrow}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" content={content} arrow={arrow}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" content={content} arrow={arrow}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div style={{ marginInlineStart: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Tooltip placement="bottomLeft" content={content} arrow={arrow}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" content={content} arrow={arrow}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" content={content} arrow={arrow}>
          <Button>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};
```

## 位置

```jsx
import React from 'react';
import { Tooltip, Space, Button as YCButton } from '@yangwch/y-components';
import styled from 'styled-components';

const buttonWidth = 80;
const Button = styled(YCButton)`
  width: ${buttonWidth}px;
  margin: 5px;
`;

export default () => {
  const content = (
    <div>
      <p>Tooltip Content</p>
      <p>Tooltip Content</p>
    </div>
  );

  return (
    <div className="demo">
      <div style={{ marginInlineStart: buttonWidth + 4, whiteSpace: 'nowrap' }}>
        <Tooltip placement="topLeft" content={content}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top" content={content}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" content={content}>
          <Button>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'inline-start' }}>
        <Tooltip placement="leftTop" content={content}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" content={content}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip trigger={['click']} placement="leftBottom" content={content}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, marginInlineStart: buttonWidth * 4 + 24 }}>
        <Tooltip placement="rightTop" content={content}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" content={content}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" content={content}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div style={{ marginInlineStart: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Tooltip placement="bottomLeft" content={content}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" content={content}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" content={content}>
          <Button>BR</Button>
        </Tooltip>
      </div>
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
        <Tooltip content="Tooltip Content" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
  );
};
```
