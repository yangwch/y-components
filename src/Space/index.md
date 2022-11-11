**Usage**
```jsx
import React from 'react';

import { Space, Button, Card } from 'y-components';

export default () => {
  return (
    <Card>
      <Space>
        Space
        <Button>Button</Button>
        <Button type="primary">Primary</Button>
        <div style={{ background: '#ccc', width: 50, height: 50}}></div>
      </Space>
    </Card>
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
      <Space wrap>
        Space
        <Button>Button</Button>
        <Button type="primary">Primary</Button>
        <div style={{ background: '#ccc', width: 50, height: 50}}></div>
      </Space>
    </Card>
  );
};
```
