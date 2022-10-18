Basic Grid

```tsx
import React from 'react';

import { Row, Col } from 'y-components';

const colStyle = {
  border: '1px solid #ccc',
  padding: '5px 0',
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

Responsive

```tsx
import React from 'react';

import { Row, Col } from 'y-components';

const colStyle = {
  border: '1px solid #ccc',
  padding: '5px 0',
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
  )
}
```
