import React from 'react';
import { mountTest } from '../../test/shared/mountTest';

import { Input } from './index';

describe('Input', () => {
  mountTest(() => <Input size="large" />);
});
