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
import { Dialog, Button, Space } from '@yangwch/y-components';

export default () => {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  return (
    <div>
      <Space>
        <Button onClick={() => setVisible(!visible)}>Open Dialog</Button>
        <Button onClick={() => setVisible2(!visible)}>Open Dialog Without Transition</Button>
      </Space>
      <Dialog
        visible={visible}
        onClose={() => setVisible(false)}
        title="Basic Dialog"
        transitionStyles={{
          entering: { transform: 'scale(2, 2) translate(0, -200px)' },
          entered: { transform: 'scale(1, 1)' },
          exiting: { transform: 'translate(0, 500px)' },
          exited: { transform: 'scale(0, 0)' },
          unmounted: { transform: 'scale(0, 0)' },
        }}
      >
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
      </Dialog>
      <Dialog
        visible={visible2}
        onClose={() => setVisible2(false)}
        title="Basic Dialog"
        disableTransition
      >
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
      </Dialog>
    </div>
  );
};
```


## Scroll Content
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
        transitionStyles={{
          entering: { transform: 'scale(2, 2) translate(0, -200px)' },
          entered: { transform: 'scale(1, 1)' },
          exiting: { transform: 'translate(0, 500px)' },
          exited: { transform: 'scale(0, 0)' },
          unmounted: { transform: 'scale(0, 0)' },
        }}
      >
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>SOME CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
        <p>VERY LONG CONTENTS...</p>
      </Dialog>
    </div>
  );
};
```