---
category: Components
type: 数据展示
title: Dialog
toc: content
---

## Dialog

```jsx
import React from 'react';
import { Dialog, Button } from '@yangwch/y-components';

export default () => {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);
  return (
    <div ref={ref}>
      <Button onClick={() => setVisible(!visible)}>Toggle: {visible.toString()}</Button>
      <Dialog visible={visible} getContainer={() => ref.current}>
        Dialog!!!
      </Dialog>
    </div>
  );
};
```
