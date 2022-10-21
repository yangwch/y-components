**Divider**

```tsx
import React from 'react';

import { Divider } from 'y-components';

const Paragraph = ({ children }) => <p style={{ margin: 0, padding: 0 }}>{children}</p>;

export default () => {
  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </Paragraph>
      <Divider />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </Paragraph>
    </div>
  );
};
```

**Inner Text**

```tsx
import React from 'react';

import { Divider } from 'y-components';

const Paragraph = ({ children }) => <p style={{ margin: 0, padding: 0 }}>{children}</p>;

export default () => {
  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </Paragraph>
      <Divider>Text Left</Divider>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </Paragraph>
      <Divider align="center">Text Center</Divider>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </Paragraph>
      <Divider align="right">Text Right</Divider>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi
        ista probare, quae sunt a te dicta? Refert tamen, quo modo.
      </Paragraph>
    </div>
  );
};
```

**Orientation**

```tsx
import React from 'react';

import { Divider, Button } from 'y-components';

export default () => {
  return (
    <div>
      <div> Vertical & Custom Style</div>
      <div style={{ fontSize: '22px' }}>
        <span>Left</span>
        <Divider type="vertical" style={{ height: 25 }} />
        <span> Center</span>
        <Divider type="vertical" style={{ borderColor: 'red', margin: '0 30px' }} />
        <span style={{ color: 'red' }}>Right</span>
      </div>
    </div>
  );
};
```
