代码演示

```tsx
import React from 'react';

import { Button } from 'y-components';

export default () => (
  <div>
    <p>
      <Button>Default</Button>  <Button disabled>Disabled</Button>
    </p>
    <p>
      <Button type="primary">Primary</Button> <Button type="dashed">Dashed</Button> 
      <Button danger>Danger</Button>
    </p>

    <p
      style={{
        background: 'rgb(190, 200, 200)',
        padding: '20px',
      }}
    >
      <Button type="ghost">Ghost</Button> &nbsp;
      <Button type="ghost" disabled>
        Ghost Disabled
      </Button>
    </p>

    <p></p>
  </div>
);
```
