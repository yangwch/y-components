import React from 'react';
import { render } from '@testing-library/react';
import { mountTest } from '../../test/shared/mountTest';

import Form from './index';

describe('Divider', () => {
  mountTest(() => <Form />)
  mountTest(() => <Form>test</Form>)
  mountTest(() =>{
    const form = Form.userForm()
    return <Form form={form}/>
  })
})
