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

## Size

```jsx
import React from 'react';

import { Space, Switch } from '@yangwch/y-components';
export default () => {
  return (
    <Space direction="vertical" align="start">
      <Space>
        <Switch size="small" aria-label="a switch for demo"></Switch>
        <Switch defaultChecked={true} size="small" aria-label="a switch for demo"></Switch>
      </Space>
      <Space>
        <Switch></Switch>
        <Switch defaultChecked={true} aria-label="a switch for demo"></Switch>
      </Space>
      <Space>
        <Switch size="large"></Switch>
        <Switch defaultChecked={true} size="large"></Switch>
      </Space>
    </Space>
  );
};
```

## API

<API id="Switch"></API>
