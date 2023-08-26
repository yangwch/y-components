---
category: Components
type: 数据展示
title: Form
toc: content
---

## Basic Usage

```jsx
import React from 'react';

import { Form } from '@yangwch/y-components';

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
  const [values, setValues] = React.useState();
  const form = Form.useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    form
      .validateFields()
      .then((values) => {
        setValues(values);
      })
      .catch(({ errors }) => {
        // setValues()
      });
  };

  const onFieldsChange = (fieldName, values) => {
    console.log('onFieldsChange', fieldName, values);
  };
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
        <Form.Item
          label="姓名"
          name="name"
          rule={{
            required: true,
            type: 'string',
            message: '姓名是必填项，且长度为2-5',
            min: 2,
            max: 5,
          }}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rule={{ type: 'number', message: '请输入合法的年龄', min: 0 }}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <button type="submit">提交</button>
        </Form.Item>
      </Form>

      <div>
        结果：
        <br />
        &nbsp;&nbsp;姓名：{values?.name}
        <br />
        &nbsp;&nbsp;年龄：{values?.age}
      </div>
    </div>
  );
};
```

## Layout

```jsx
import React from 'react';

import { Form, Input, Button } from '@yangwch/y-components';

const labelCol = { span: 5, style: { padding: 5, fontSize: 14 } };

const wrapperCol = { span: 10, style: { fontSize: 14 } };

export default () => {
  const form = Form.useForm();
  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch(({ errors }) => {
        // setValues()
      });
  };
  return (
    <Form
      form={form}
      initialValues={{ username: '', password: '' }}
      name="login"
      labelCol={labelCol}
      wrapperCol={wrapperCol}
    >
      <Form.Item
        name="username"
        label="用户名"
        rule={{
          required: true,
          type: 'string',
          message: '姓名是必填项，长度为2-15!',
          min: 2,
          max: 15,
        }}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        label="密&nbsp;&nbsp;&nbsp;码"
        rule={{
          required: true,
          type: 'string',
          message: '密码是必填项，长度3-20',
          min: 3,
          max: 20,
        }}
      >
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button onClick={onSubmit}>提交</Button>
      </Form.Item>
    </Form>
  );
};
```

## Inline

```jsx
import React from 'react';

import { Form } from '@yangwch/y-components';

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
  const [values, setValues] = React.useState();
  const onSubmit = (e, values, form) => {
    e.stopPropagation();
    e.preventDefault();
    form.validateFields().then(() => {
      setValues(values);
    });
  };
  return (
    <div>
      <Form
        inline
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          age: 0,
        }}
      >
        <Form.Item
          label="姓名"
          name="name"
          rule={{
            required: true,
            type: 'string',
            message: '姓名是必填项，且长度为2-5',
            min: 2,
            max: 5,
          }}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rule={{ type: 'number', message: '请输入合法的年龄', min: 0 }}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <button type="submit">提交</button>
        </Form.Item>
      </Form>

      <pre>
        结果：
        <br />
        &nbsp;&nbsp;姓名：{values?.name}
        <br />
        &nbsp;&nbsp;年龄：{values?.age}
      </pre>
    </div>
  );
};
```

## API

### Form

<API id="Form"></API>

### Form.Item

<API id="FormItem"></API>

表单校验使用[async-validator](https://github.com/yiminghe/async-validator#rules)
