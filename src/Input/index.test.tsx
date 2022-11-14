import React from 'react';
import { render } from '@testing-library/react';
import { mountTest } from '../../test/shared/mountTest';

import Input from './index';

describe('Input', () => {
  mountTest(() => <Input size="large" />)

})