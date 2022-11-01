_---Building---_

**Basic Usage**

```tsx
import React from 'react';

import { Form } from 'y-components';

const Input = (props) => {
  const onValueChange = (e) => {
    const v = e.target.value
    if (props.onChange) {
      props.onChange(v)
    }
  }
  return <input {...props} onChange={onValueChange} />
}

export default () => {
  const form = Form.useForm();
  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        onSubmit={(e, values) => {
          e.preventDefault();
          e.stopPropagation();
          alert(JSON.stringify(values))
        }}
        initialValues={{
          name: '小明',
          age: 10
        }}
      >
        <Form.Item label="姓名" name="name">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="年龄" name="age">
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <button type="submit">提交</button>
        </Form.Item>
      </Form>
    </div>
  );
};
```
