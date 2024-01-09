---
category: Components
type: 数据展示
title: TagInput
toc: content
---

## Demo

```jsx
import React from 'react';
import { TagInput } from '@yangwch/y-components';

export default () => {
  return (
    <TagInput
      defaultValue={['苹果', '香蕉', '柿子']}
      placeholder="请输入..."
      onChange={(v) => console.log(v)}
    />
  );
};
```

## 受控模式

```jsx
import React from 'react';
import { TagInput } from '@yangwch/y-components';

export default () => {
  const [value, setValue] = React.useState(['老虎', '狮子']);
  return (
    <TagInput
      value={value}
      placeholder="请输入..."
      onChange={(v) => {
        setValue(v);
        console.log(v);
      }}
    />
  );
};
```

## API

<API id="TagInput"></API>
