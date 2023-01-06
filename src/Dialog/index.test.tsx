import React from 'react';
import { render } from '@testing-library/react';
import { mountTest } from '../../test/shared/mountTest';

import Dialog from './index';

describe('Dialog', () => {
  mountTest(() => <Dialog />);
  mountTest(() => <Dialog visible>test content</Dialog>);
  mountTest(() => <Dialog title="test"/>);
  it('render correctly', () => {
    const testFn = () => render(<Dialog visible>Test</Dialog>);
    expect(testFn).not.toThrowError();
  
    const { container } = testFn();
    expect(container.firstChild).toMatchSnapshot();
  });
});

