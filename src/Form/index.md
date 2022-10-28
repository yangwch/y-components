*---Building---*

**Basic Usage**

```tsx
import React from 'react';

import { Form } from 'y-components';

export default () => {
  const form = Form.useForm()
  return (
    <div>
      <Form form={form}>
        <input /> <button>提交</button>
      </Form>
    </div>
  );
};
```
