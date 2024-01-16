---
category: Components
type: 数据展示
title: Popup
toc: overlay
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
            <p> this is the overlay</p>
            <p> this is the overlay</p>
            <p> this is the overlay</p>
            <p> this is the overlay</p>
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

## 位置

```jsx
import React from 'react';
import { Popup, Space, Button as YCButton } from '@yangwch/y-components';
import styled from 'styled-components';

const buttonWidth = 80;
const Button = styled(YCButton)`
  width: ${buttonWidth}px;
  margin: 5px;
`;

export default () => {
  const overlay = (
    <div style={{ border: '1px solid', backgroundColor: 'lightgreen', padding: '0 10px' }}>
      <p>overlay</p>
      <p>overlay</p>
    </div>
  );

  return (
    <div className="demo">
      <div style={{ marginInlineStart: buttonWidth + 4, whiteSpace: 'nowrap' }}>
        <Popup placement="topLeft" overlay={overlay}>
          <Button>TL</Button>
        </Popup>
        <Popup placement="top" overlay={overlay}>
          <Button>Top</Button>
        </Popup>
        <Popup placement="topRight" overlay={overlay}>
          <Button>TR</Button>
        </Popup>
      </div>
      <div style={{ width: buttonWidth, float: 'inline-start' }}>
        <Popup placement="leftTop" overlay={overlay}>
          <Button>LT</Button>
        </Popup>
        <Popup placement="left" overlay={overlay}>
          <Button>Left</Button>
        </Popup>
        <Popup placement="leftBottom" overlay={overlay}>
          <Button>LB</Button>
        </Popup>
      </div>
      <div style={{ width: buttonWidth, marginInlineStart: buttonWidth * 4 + 24 }}>
        <Popup placement="rightTop" overlay={overlay}>
          <Button>RT</Button>
        </Popup>
        <Popup placement="right" overlay={overlay}>
          <Button>Right</Button>
        </Popup>
        <Popup placement="rightBottom" overlay={overlay}>
          <Button>RB</Button>
        </Popup>
      </div>
      <div style={{ marginInlineStart: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popup placement="bottomLeft" overlay={overlay}>
          <Button>BL</Button>
        </Popup>
        <Popup placement="bottom" overlay={overlay}>
          <Button>Bottom</Button>
        </Popup>
        <Popup placement="bottomRight" overlay={overlay}>
          <Button>BR</Button>
        </Popup>
      </div>
    </div>
  );
};
```

## 受控模式

```jsx
import React from 'react';
import { Popup, Space, Button } from '@yangwch/y-components';

export default () => {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Popup
        visible={open}
        placement="bottom"
        trigger={['click']}
        style={{ border: '1px solid', backgroundColor: 'lightgreen', padding: '0 10px' }}
        overlay={
          <div>
            <p> this is the overlay</p>
            <p> this is the overlay</p>
            <p> this is the overlay</p>
            <p> this is the overlay</p>
          </div>
        }
        autoAdjustPlacements={[
          {
            placement: 'bottom',
          },
        ]}
      >
        <Button onClick={() => setOpen(!open)}>Click</Button>
      </Popup>
    </div>
  );
};
```

## API

<API id="Popup"></API>
