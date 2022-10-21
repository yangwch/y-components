import React from 'react';
import { render } from '@testing-library/react';
import { mountTest } from '../../test/shared/mountTest';

import Card from './index';

describe('Card', () => {
  mountTest(() => <Card />);
  mountTest(() => <Card>test</Card>);
  mountTest(() => <Card title="test"/>);
});

it('render correctly', () => {
  const testFn = () => render(<Card>Test</Card>);
  expect(testFn).not.toThrowError();

  const { container } = testFn();
  expect(container.firstChild).toMatchSnapshot();
});
