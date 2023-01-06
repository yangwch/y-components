import React from 'react';
import { render } from '@testing-library/react';
import { mountTest } from '../../test/shared/mountTest';

import Checkbox from './index';

describe('Checkbox', () => {
  mountTest(() => <Checkbox />);
  mountTest(() => <Checkbox></Checkbox>);
  mountTest(() => <Checkbox type="radio" />);
  
  it('render correctly', () => {
    const testFn = () => render(<Checkbox></Checkbox>);
    expect(testFn).not.toThrowError();
  
  });
});

