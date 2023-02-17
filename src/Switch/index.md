---
category: Components
type: 数据展示
title: Switch
toc: content
---

## 基本

```jsx
import React from 'react';

import { Space, Switch } from '@yangwch/y-components';
export default () => {
  return (
    <Space direction="vertical">
      <Switch />
      <Switch defaultChecked />
    </Space>
  );
};
```

## 文字

```jsx
import React from 'react';

import { Space, Switch } from '@yangwch/y-components';
export default () => {
  return (
    <Space direction="vertical">
      <Switch uncheckedText="✘" checkedText="✔" />
      <Switch defaultChecked checkedText="开" uncheckedText="关" />
    </Space>
  );
};
```

## 禁用

```jsx
import React from 'react';

import { Space, Switch } from '@yangwch/y-components';
export default () => {
  return (
    <Space direction="vertical">
      <Switch uncheckedText="✘" checkedText="✔" disabled />
      <Switch defaultChecked checkedText="开" uncheckedText="关" disabled />
    </Space>
  );
};
```