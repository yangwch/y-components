import React from 'react';
import { render } from '@testing-library/react';
import { mountTest } from '../../test/shared/mountTest';

import InternalInput from './index';

describe('Input', () => {
  mountTest(() => <InternalInput size="large" />)

})