---
category: Components
type: 数据展示
title: Grid
toc: content
---
## Basic Grid

```jsx
import React from 'react';

import { Row, Col } from '@yangwch/y-components';

const colStyle = {
  border: '1px solid blue',
  padding: '5px 0',
  background: 'rgb(119 145 240)'
};
export default () => {
  return (
    <div>
      <Row>
        <Col span={10}>
          <div style={colStyle}>Col 10</div>
        </Col>
        <Col span={8}>
          <div style={colStyle}>Col 8</div>
        </Col>

        <Col span={6}>
          <div style={colStyle}>Col 6</div>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <div style={colStyle}>Col 10</div>
        </Col>
        <Col span={10} offset={4}>
          <div style={colStyle}>Col 10 Offset: 4</div>
        </Col>
      </Row>
    </div>
  );
};
```

## Responsive

```jsx
import React from 'react';

import { Row, Col } from '@yangwch/y-components';

const colStyle = {
  border: '1px solid blue',
  padding: '5px 0',
  background: 'rgb(119 145 240)'
};
export default () => {
  return (
    <div>
      <Row>
        <Col sm={24} xl={12}>
          <div style={colStyle}>col xl: 12 sm: 24</div>
        </Col>

        <Col sm={24} xl={12}>
          <div style={colStyle}>col xl: 12 sm: 24</div>
        </Col>
      </Row>
    </div>
  );
};
```

## Alignment

```jsx
import React from 'react';

import { Row, Col } from '@yangwch/y-components';

const colStyle = {
  border: '1px solid blue',
  padding: '5px 0',
  background: 'rgb(119 145 240)'
};
export default () => {
  return (
    <div>
      -- Align Top -- Justify Center --
      <Row align="top" justify="center">
        <Col span={4}>
          <div style={{ ...colStyle, height: 50 }}></div>
        </Col>

        <Col span={4}>
          <div style={{ ...colStyle, height: 100 }}></div>
        </Col>

        <Col span={4}>
          <div style={{ ...colStyle, height: 50 }}></div>
        </Col>
      </Row>
      -- Align Middle -- Justify space-around --
      <Row align="middle" justify="space-around">
        <Col span={4}>
          <div style={{ ...colStyle, height: 50 }}></div>
        </Col>

        <Col span={4}>
          <div style={{ ...colStyle, height: 100 }}></div>
        </Col>

        <Col span={4}>
          <div style={{ ...colStyle, height: 50 }}></div>
        </Col>
      </Row>
      -- Align Bottom -- Justify space-between --
      <Row align="bottom" justify="space-between">
        <Col span={4}>
          <div style={{ ...colStyle, height: 50 }}></div>
        </Col>

        <Col span={4}>
          <div style={{ ...colStyle, height: 100 }}></div>
        </Col>

        <Col span={4}>
          <div style={{ ...colStyle, height: 50 }}></div>
        </Col>
      </Row>
    </div>
  );
};
```

## Gutter

```jsx
import React from 'react';

import { Row, Col } from '@yangwch/y-components';

const colStyle = {
  background: 'rgb(119 145 240)',
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff'
};

const ColumnContent = () => (<div style={colStyle}>Column</div>)

export default () => {
  return (
    <div>
      Gutter
      <Row gutter={[16, 24]}>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>

        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>

        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
      </Row>
      Another Row
      <Row gutter={[16, 24]}>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
        <Col span={6}><ColumnContent /></Col>
      </Row>
    </div>
  )
}
```
