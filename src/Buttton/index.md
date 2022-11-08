代码演示

```jsx
import React from 'react';

import { Button } from 'y-components';

export default () => {
  return (
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
          <Button type="ghost">Ghost</Button>  
        <Button type="ghost" disabled>
          Ghost Disabled
        </Button>
      </p>

      <p></p>
    </div>
  );
};
```

Button size

```jsx
import React from 'react';

import { Button } from 'y-components';

export default () => {
  const [size, setSize] = React.useState('middle');
  const sizes = ['small', 'middle', 'large'];
  return (
    <div>
      <div>
        {sizes.map((s) => (
          <label key={s}>
            <input onChange={() => setSize(s)} type="radio" value={s} checked={size === s} /> {s}
          </label>
        ))}
      </div>
      <p>
        <Button size={size}>Default</Button>  
        <Button size={size} disabled>
          Disabled
        </Button>
      </p>
      <p>
        <Button size={size} type="primary">
          Primary
        </Button>
         <Button size={size} type="dashed">
          Dashed
        </Button> <Button size={size} danger>
          Danger
        </Button>
      </p>

      <p
        style={{
          background: 'rgb(190, 200, 200)',
          padding: '20px',
        }}
      >
        <Button size={size} type="ghost">
          Ghost
        </Button>
         <Button size={size} type="ghost" disabled>
          Ghost Disabled
        </Button>
      </p>

      <p></p>
    </div>
  );
};
```

**ButtonGroup**

```jsx
import React from 'react';

import { Button } from 'y-components';

export default () => {
  return (
    <div>
      <Button.Group>
        <Button>Default</Button><Button>Choice</Button>
        <Button>Default2</Button><Button>Choice2</Button>
      </Button.Group>
    </div>
  )
}
```
