_---Building---_

**Basic Usage**

```tsx
import React from 'react';

import { Form } from 'y-components';

export default () => {
  const form = Form.useForm();
  return (
    <div>
      <Form form={form} labelCol={{ span: 2 }} wrapperCol={{ span: 10 }}>
        <Form.Item label="姓名" name="name">
          <input type="text" />
        </Form.Item>
        <Form.Item label="年龄" name="age">
          <input type="number" />
        </Form.Item>
        <Form.Item>
          <button>提交</button>
        </Form.Item>
      </Form>
    </div>
  );
};
```
