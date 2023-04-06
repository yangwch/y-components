---
category: Components
type: 数据展示
title: Overflow
toc: content
---

## 基本

```jsx
import React from 'react';
import { Overflow, Tag, Input } from '@yangwch/y-components';

export default () => {
  const [itemsCount, setItemsCount] = React.useState(5);
  const renderItem = (item) => {
    return <div style={{ margin: 2, background: '#ccc' }}>{item.label}</div>;
  };
  const renderRest = (ommitedItems = []) => {
    if (ommitedItems.length === 0) return null;
    return <span style={{ background: 'lightblue' }}> +{ommitedItems.length}</span>;
  };

  const items = React.useMemo(() => {
    const data = [];
    for (let i = 0; i < itemsCount; i++) {
      data.push({ label: 'item ' + (i + 1), value: 'item' + (i + 1) });
    }
    return data;
  }, [itemsCount]);
  return (
    <div style={{ width: 200, margin: '50px auto' }}>
      <div>
        show
        <Input
          style={{ width: 60, margin: '2px 5px' }}
          max={10}
          type="number"
          defaultValue={itemsCount}
          onChange={(e) => {
            console.log('input', e.target.value);
            setItemsCount(e.target.value);
          }}
        />
        items
      </div>
      <div style={{ border: '1px solid #0C0C0C' }}>
        <Overflow items={items} renderItem={renderItem}></Overflow>
      </div>
    </div>
  );
};
```
