---
category: Components
type: 数据展示
title: Popup
toc: content
---

## 基本

```jsx
import React from 'react';
import { Popup, Space, Button } from '@yangwch/y-components';

export default () => {
  const popupProps = {
    style: { border: '1px solid', backgroundColor: 'lightgreen' },
  };
  return (
    <Space size={50}>
      <Popup forceRender={false} overlay={<p>Top</p>} placement="top" {...popupProps}>
        <Button>Top</Button>
      </Popup>
      <Popup overlay={<p>Bottom</p>} placement="bottom" {...popupProps}>
        <Button>Bottom</Button>
      </Popup>
      <Popup overlay={<p>Left</p>} placement="left" {...popupProps}>
        <Button>Left</Button>
      </Popup>
      <Popup overlay={<p>Right</p>} placement="right" {...popupProps}>
        <Button>Right</Button>
      </Popup>
    </Space>
  );
};
```
