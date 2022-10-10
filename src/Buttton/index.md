## Demo

```tsx
import React from 'react';

import { Button } from 'y-components';

export default () => (
  <div>
    <p>
      <Button>Default</Button>  <Button disabled>Disabled</Button>
    </p>
    <p>
      <Button type="primary">Primary</Button>
    </p>

    <p>
      <Button danger>Danger</Button>
    </p>
  </div>
);
```
