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
    <Space direction="vertical" size={50} align="start">
      <Space align="start">
        <Popup
          forceRender={false}
          overlay={<p>Top</p>}
          placement="top"
          trigger={['click']}
          {...popupProps}
        >
          <Button>Top & CLICK ME</Button>
        </Popup>
        <Popup overlay={<p>Bottom</p>} placement="bottom" {...popupProps}>
          <Button>Bottom & HOVER ME</Button>
        </Popup>
        <Popup overlay={<p>Left</p>} placement="left" {...popupProps} trigger={['focus']}>
          <Button>Left & FOCUS</Button>
        </Popup>
        <Popup
          overlay={<p>Right</p>}
          placement="right"
          {...popupProps}
          trigger={['focus', 'hover']}
        >
          <Button>Right & FOCUS or HOVER ME</Button>
        </Popup>
      </Space>
      <Space align="start">
        <Popup overlay={<p>TopLeft</p>} placement="topLeft" {...popupProps}>
          <Button>TopLeft</Button>
        </Popup>
        <Popup overlay={<p>TopRight</p>} placement="topRight" {...popupProps}>
          <Button>TopRight</Button>
        </Popup>
        <Popup overlay={<p>BottomLeft</p>} placement="bottomLeft" {...popupProps}>
          <Button>BottomLeft</Button>
        </Popup>
        <Popup overlay={<p>BottomRight</p>} placement="bottomRight" {...popupProps}>
          <Button>BottomRight</Button>
        </Popup>
      </Space>
    </Space>
  );
};
```

## 自动调整

```jsx
import React from 'react';
import { Popup, Space, Button } from '@yangwch/y-components';

export default () => {
  return (
    <div>
      <Popup
        placement="top"
        trigger={['click']}
        style={{ border: '1px solid', backgroundColor: 'lightgreen', padding: '0 10px' }}
        overlay={
          <div>
            <p> this is the content</p>
            <p> this is the content</p>
            <p> this is the content</p>
            <p> this is the content</p>
          </div>
        }
        autoAdjustPlacements={[
          {
            placement: 'bottom',
          },
        ]}
      >
        <Button>Scroll To The Top</Button>
      </Popup>
    </div>
  );
};
```

## API

<API id="Popup"></API>
