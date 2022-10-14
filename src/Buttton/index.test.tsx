import React from 'react';
import { mountTest } from '../../test/shared/mountTest';

import Button from './index';

describe('Button', () => {
  mountTest(() => <Button />);
  mountTest(() => <Button>Default</Button>);
  mountTest(() => <Button type="primary">Primary</Button>);
  mountTest(() => <Button disabled>Disabled</Button>);

  mountTest(() => <Button size="large" />);
  mountTest(() => <Button size="small">Small</Button>);
  mountTest(() => <Button size="middle" disabled>Middle Disabled</Button>);
  
});
