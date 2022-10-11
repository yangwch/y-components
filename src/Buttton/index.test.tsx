import React from 'react';
import { mountTest } from '../../test/shared/mountTest';

import Button from './index';

describe('Button', () => {
  mountTest(() => <Button>Default</Button>);
  mountTest(() => <Button type="primary">Primary</Button>);
  mountTest(() => <Button disabled>Disabled</Button>);
  mountTest(() => <Button type="dashed">Dashed</Button>);
  mountTest(() => <Button danger>Danger</Button>);
  
});
