
**Usage**


```jsx
import React from 'react';
import { Tag } from 'y-components';

export default () => {
  return (
    <div>
      <Tag>tag 1</Tag>
      <Tag closable>tag 2</Tag>
      <Tag closable>tag 3</Tag>
      <Tag closable>tag 4</Tag>
      <Tag closable onClose={e => e.preventDefault()}>preventDefault 5</Tag>
    </div>
  );
};
```
