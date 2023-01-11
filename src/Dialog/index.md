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
      <Button onClick={() => setVisible(!visible)}>Open Dialog</Button>
      <Dialog
        visible={visible}
        title="Basic Dialog"
        getContainer={() => ref.current}
        onClose={() => setVisible(false)}
        // width={300}
        zIndex={10}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Dialog>
    </div>
  );
};
```

## Customize Transition
```jsx
import React from 'react';
import { Dialog, Button } from '@yangwch/y-components';

export default () => {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);
  return (
    <div ref={ref}>
      <Button onClick={() => setVisible(!visible)}>Open Dialog</Button>
      <Dialog
        visible={visible}
        onClose={() => setVisible(false)}
        title="Basic Dialog"
        motionStyles={{
          entering: { transform: 'scale(2, 2)' },
          entered: { transform: 'scale(1, 1)' },
          exiting: { transform: 'translate(0, 500px)' },
          exited: { transform: 'scale(0, 0)' },
          unmounted: { transform: 'scale(0, 0)' },
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Dialog>
    </div>
  );
};
```

