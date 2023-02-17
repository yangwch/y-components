---
category: Components
type: 数据展示
title: Switch
toc: content
---

## Demo

```jsx
import React from 'react';

import { Space, Switch } from '@yangwch/y-components';
export default () => {
  return (
    <Space direction="vertical">
      <Switch uncheckedText="✘" checkedText="✔" />
      <Switch checked checkedText="开" />
    </Space>
  );
};
```
