import React from 'react';
import { render } from '@testing-library/react';
import { mountTest } from '../../test/shared/mountTest';

import Button from './index';

describe('Button', () => {
  mountTest(() => <Button />);
  mountTest(() => <Button>Default</Button>);
  mountTest(() => <Button type="primary">Primary</Button>);
  mountTest(() => <Button disabled>Disabled</Button>);

  mountTest(() => <Button size="large" />);
  mountTest(() => <Button size="small">Small</Button>);
  mountTest(() => (
    <Button size="middle" disabled>
      Middle Disabled
    </Button>
  ));

  it('render correctly', () => {
    const testFn = () => render(<Button>Test</Button>);
    expect(testFn).not.toThrowError();

    const { container } = testFn();
    expect(container.firstChild).toMatchSnapshot();
  });
});
