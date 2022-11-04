_---Building---_

**Basic Usage**

```jsx
import React from 'react';

import { Form } from 'y-components';

const Input = (props) => {
  const onValueChange = (e) => {
    const v = e.target.value;
    if (props.onChange) {
      props.onChange(props.type === 'number' ? Number(v) : v);
    }
  };
  return <input {...props} onChange={onValueChange} />;
};

export default () => {
  const [values, setValues] = React.useState()
  const form = Form.useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    form.validateFields().then((values) => {
      setValues(values)
    }).catch(({ errors }) => {
      setValues()
    });
  };

  const onFieldsChange = (fieldName, values) => {
    console.log('onFieldsChange', fieldName, values)
  }
  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        onSubmit={onSubmit}
        initialValues={{
          name: '小明',
          age: 10,
        }}
        onFieldsChange={onFieldsChange}
      >
        <Form.Item label="姓名" name="name" rule={{ required: true, type: 'string', message: '姓名是必填项，且长度为2-5',min: 2, max: 5 }}>
          <Input type="text" />
        </Form.Item>
        <Form.Item label="年龄" name="age" rule={{ type: 'number', message: '请输入合法的年龄', min: 1, max: 20 }}>
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <button type="submit">提交</button>
        </Form.Item>
      </Form>

      <div>
      结果：<br/>
      &nbsp;&nbsp;姓名：{values?.name}<br/>
      &nbsp;&nbsp;年龄：{values?.age}
      </div>
    </div>
  );
};
```
