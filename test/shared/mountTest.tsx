import { render } from '@testing-library/react';
import React from 'react';

export function mountTest(Component: React.ComponentType) {
  describe('mount and unmount', () => {
    it(`component could mount and unmount without errros`, () => {
      const { unmount, rerender } = render(<Component />);
      const fn = () => {
        rerender(<Component />);
        unmount();
      };
      expect(fn).not.toThrowError();
    });
  });
}
