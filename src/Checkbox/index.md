**Usage**

```jsx
import React from 'react';
import { Checkbox } from 'y-components';

export default () => {
  return (
    <div>
      <label>
        <Checkbox /> Checkbox
      </label>
    </div>
  );
};
```

**Radio**
```jsx
import React from 'react';
import { Checkbox, Divider } from 'y-components';

export default () => {
  return (
    <div>
      <div>
        <h3>UnControlled Radio</h3>
        <label>
          <Checkbox type="radio" /> Radio
        </label>
      </div>
      <Divider />
      <div>
        <h3>Controlled Radio</h3>
        <label>
          <Checkbox type="radio" checked={false} /> I can't be checked
        </label>
      </div>
    </div>
  );
};
```

**Group**
```jsx
import React from 'react';
import { Checkbox, Divider } from 'y-components';

export default () => {
  return (
    <div>
      <Checkbox.Group defaultValue={['1']}>
        <label><Checkbox value="1"/> 1</label>
        <label><Checkbox value="2"/> 2</label>
        <label><Checkbox value="3"/> 3</label>
      </Checkbox.Group>
    </div>
  )
}
```