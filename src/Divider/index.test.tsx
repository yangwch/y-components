import React from 'react';
import { render } from '@testing-library/react';
import { mountTest } from '../../test/shared/mountTest';

import Divider from './index';

describe('Divider', () => {
  mountTest(() => <Divider />)
  mountTest(() => <Divider>test</Divider>)
  mountTest(() => <Divider type="vertical" />)
  it('render correctly', () => {
    const testFn = () => render(<Divider>Test</Divider>);
    expect(testFn).not.toThrowError();
  
    const { container } = testFn();
    expect(container.firstChild).toMatchSnapshot();
  });
})
