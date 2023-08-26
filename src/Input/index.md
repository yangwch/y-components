---
category: Components
type: 数据展示
title: Input
toc: content
---

## Basic Usage

```jsx
import React from 'react';
import { Input, Space } from '@yangwch/y-components';

export default () => {
  return (
    <Space direction="vertical" align="start">
      <Input placeholder="请输入文字" size="large" style={{ width: '100%' }} prefix={'🚫'} />
      <Input placeholder="disabled" disabled />
      <Input type="password" />
    </Space>
  );
};
```

## Size

```jsx
import React from 'react';
import { Input } from '@yangwch/y-components';

const sizeList = ['small', 'middle', 'large'];

export default () => {
  const [size, setSize] = React.useState('middle');

  return (
    <div>
      <div>
        {sizeList.map((s) => (
          <label key={s}>
            <input type="radio" checked={size === s} onChange={(e) => setSize(s)} />
            {s}
          </label>
        ))}
      </div>
      <Input size={size} placeholder="请输入文字" />
    </div>
  );
};
```

## API

<API id="Input"></API>
