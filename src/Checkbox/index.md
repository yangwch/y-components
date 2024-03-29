---
category: Components
type: 数据展示
title: Checkbox
toc: content
---

## Basic

```jsx
import React from 'react';
import { Checkbox } from '@yangwch/y-components';

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

## Radio

```jsx
import React from 'react';
import { Checkbox, Divider } from '@yangwch/y-components';

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

## Group

```jsx
import React from 'react';
import { Checkbox, Divider } from '@yangwch/y-components';

export default () => {
  const [controlledValue, setControlledValue] = React.useState(['1', '2']);
  return (
    <div>
      <h3>UnControlled</h3>
      <Checkbox.Group defaultValue={['1']}>
        <label>
          <Checkbox value="1" /> 1
        </label>
        <label>
          <Checkbox value="2" /> 2
        </label>
        <label>
          <Checkbox value="3" /> 3
        </label>
      </Checkbox.Group>
      <Divider />
      <h3>Controlled</h3>
      <Checkbox.Group value={controlledValue} onChange={(values) => setControlledValue(values)}>
        <label>
          <Checkbox value="1" /> 1
        </label>
        <label>
          <Checkbox value="2" /> 2
        </label>
        <label>
          <Checkbox value="3" /> 3
        </label>
      </Checkbox.Group>

      <h3>Radio</h3>
      <Checkbox.Group defaultValue={'1'} type="radio">
        <label>
          <Checkbox value="1" /> 1
        </label>
        <label>
          <Checkbox value="2" /> 2
        </label>
        <label>
          <Checkbox value="3" /> 3
        </label>
      </Checkbox.Group>
      <Divider />
      <h3>Disabled</h3>
      <Checkbox.Group defaultValue={'2'} disabled>
        <label>
          <Checkbox value="1" /> 1
        </label>
        <label>
          <Checkbox value="2" /> 2
        </label>
        <label>
          <Checkbox value="3" /> 3
        </label>
      </Checkbox.Group>
      <br />
      <Checkbox.Group defaultValue={'2'} type="radio" disabled>
        <label>
          <Checkbox value="1" /> 1
        </label>
        <label>
          <Checkbox value="2" /> 2
        </label>
        <label>
          <Checkbox value="3" /> 3
        </label>
      </Checkbox.Group>
    </div>
  );
};
```

## API

### Checkbox

<API id="Checkbox"></API>

### Checkbox.Group

<API id="CheckboxGroup"></API>
