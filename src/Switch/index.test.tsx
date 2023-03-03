import { render } from '@testing-library/react';
import React from 'react';
import { mountTest } from '../../test/shared/mountTest';

import Switch from './index';

describe('Switch', () => {
  mountTest(() => <Switch />);
  mountTest(() => <Switch disabled checked />);
  mountTest(() => <Switch checkedText="o" uncheckedText="|" />);

  it('should render checkedText corrected', () => {
    const uncheckedText = '关';
    const checkedText = '开';
    const renderResult1 = render(<Switch uncheckedText={uncheckedText} />);
    const renderResult2 = render(<Switch checked checkedText={checkedText} />);

    expect(renderResult1.queryByText(uncheckedText)).toBeTruthy();
    expect(renderResult2.queryByText(checkedText)).toBeTruthy();
  });

  it('should render disabled styles', () => {
    const { container } = render(<Switch disabled />);
    expect(container.querySelectorAll('.yc-switch-disabled').length).toBe(1);
    expect(container.querySelectorAll('.yc-switch-disabled input[disabled]').length).toBe(1);
  });
});
