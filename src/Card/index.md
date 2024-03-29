---
category: Components
type: 数据展示
title: Card
toc: content
---

## Basic

```jsx
import React from 'react';
import { Card, Divider } from '@yangwch/y-components';

const P = ({ children }) => <p style={{ padding: 5, margin: 0 }}>{children}</p>;
export default () => {
  return (
    <div>
      <Divider>Card Basic Usage & Hoverable</Divider>
      <Card title="Card Title" extra={<a href="#">More</a>} hoverable style={{ width: 300 }}>
        <P>Card Content</P>
        <P>Card Content</P>
        <P>Card Content</P>
        <P>Card Content</P>
      </Card>
    </div>
  );
};
```

## Card Size

```jsx
import React from 'react';
import { Card, Divider } from '@yangwch/y-components';

const sizes = ['default', 'small'];
const P = ({ children }) => <p style={{ padding: 5, margin: 0 }}>{children}</p>;
export default () => {
  const [size, setSize] = React.useState('small');
  return (
    <div>
      <Divider>Card Size</Divider>
      {sizes.map((s) => (
        <label key={s}>
          <input type="radio" checked={size === s} onChange={() => setSize(s)}/> {s}
        </label>
      ))}
      <Card
        size={size}
        title="Card Title"
        extra={<a href="#">More</a>}
        hoverable
        style={{ width: 300 }}
      >
        <P>Card Content</P>
        <P>Card Content</P>
        <P>Card Content</P>
        <P>Card Content</P>
      </Card>
    </div>
  );
};
```

## Customize

```jsx
import React from 'react';

import { Card, Divider } from '@yangwch/y-components';

const P = ({ children }) => <p style={{ padding: 5, margin: 0 }}>{children}</p>;
export default () => {
  return (
    <div>
      <Divider>Default</Divider>
      <Card style={{ width: 300 }}>
        <P>Card Content</P>
        <P>Card Content</P>
        <P>Card Content</P>
        <P>Card Content</P>
      </Card>

      <Divider>Custom Body Style</Divider>
      <Card style={{ width: 300 }} bodyStyle={{ padding: 5, background: '#cccccc2a' }}>
        <P>Card Content</P>
        <P>Card Content</P>
        <P>Card Content</P>
        <P>Card Content</P>
      </Card>
    </div>
  );
};
```

## API
<API id="Card"></API>