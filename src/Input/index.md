---
category: Components
type: 数据展示
title: Input
toc: content
---

## Basic Usage

```jsx
import React from 'react';
import { Input } from '@yangwch/y-components';

export default () => {
  return (
    <div>
      <p>
        <Input placeholder="请输入文字" size="large" style={{ width: '100%' }} prefix={'🚫'} />
      </p>
      <p>
        <Input placeholder="disabled" disabled />
      </p>
    </div>
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
