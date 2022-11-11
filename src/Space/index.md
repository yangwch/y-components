**Usage**

```jsx
import React from 'react';

import { Space, Button, Card } from 'y-components';

export default () => {
  return (
    <div>
      <Space>
        <Card>
          <Space>
            Space
            <Button type="primary">Primary</Button>
            <div style={{ background: '#ccc', width: 50, height: 50 }}>Block</div>
          </Space>
        </Card>
        <Card>
          <Space align="start">
            Align: start
            <Button type="primary">Primary</Button>
            <div style={{ background: '#ccc', width: 50, height: 50 }}>Block</div>
          </Space>
        </Card>
        <Card>
          <Space align="end">
            Align: end
            <Button type="primary">Primary</Button>
            <div style={{ background: '#ccc', width: 50, height: 50 }}>Block</div>
          </Space>
        </Card>
        <Card>
          <Space align="baseline">
            Align: baseline
            <Button type="primary">Primary</Button>
            <div style={{ background: '#ccc', width: 50, height: 50 }}>Block</div>
          </Space>
        </Card>
      </Space>
    </div>
  );
};
```

**Wrap**

```jsx
import React from 'react';

import { Space, Button, Card } from 'y-components';

export default () => {
  return (
    <Card style={{ width: 300 }}>
      <Space wrap size={[30, 10]}>
        Space
        <Button>Button</Button>
        <Button type="primary">Primary</Button>
        <div style={{ background: '#ccc', width: 50, height: 50 }}></div>
      </Space>
    </Card>
  );
};
```
