---
category: Components
type: 数据展示
title: Overflow
toc: content
---

## 基本

```jsx
import React from 'react';
import { Overflow, Tag } from '@yangwch/y-components';

const items = [
  {
    label: 'item 1',
    value: 'item1',
  },
  {
    label: 'item 2',
    value: 'item2',
  },
  {
    label: 'item 3',
    value: 'item3',
  },
  {
    label: 'item 4',
    value: 'item4',
  },

  {
    label: 'item 5',
    value: 'item5',
  },
];
export default () => {
  const renderItem = (item) => {
    return <div style={{ margin: 2, background: '#ccc' }}>{item.label}</div>;
  };
  const renderRest = (ommitedItems = []) => {
    return <span style={{ background: 'lightblue' }}> +{ommitedItems.length}</span>;
  };
  return (
    <div style={{ width: 200, margin: '50px auto', border: '1px solid #0C0C0C' }}>
      <Overflow items={items} renderItem={renderItem} renderRest={renderRest}></Overflow>
    </div>
  );
};
```
