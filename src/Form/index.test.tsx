import React from 'react';
import { mountTest } from '../../test/shared/mountTest';

import { Form } from './index';

describe('Divider', () => {
  mountTest(() => <Form />);
  mountTest(() => <Form>test</Form>);
  mountTest(() => {
    const form = Form.useForm();
    return <Form form={form} />;
  });

  mountTest(() => {
    return (
      <Form>
        <Form.Item label="姓名" name="name">
          <input type="text" />
        </Form.Item>
      </Form>
    );
  });
});
