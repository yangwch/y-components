import React from 'react';
import { mountTest } from '../../test/shared/mountTest';

import Button from './index';

describe('Button', () => {
  mountTest(() => <Button />);
  mountTest(() => <Button>Default</Button>);
  mountTest(() => <Button type="primary">Primary</Button>);
  mountTest(() => <Button disabled>Disabled</Button>);
  mountTest(() => <Button type="dashed">Dashed</Button>);
  mountTest(() => <Button danger>Danger</Button>);
  mountTest(() => <Button type="ghost">Ghost</Button>);

  mountTest(() => <Button size="large">Default</Button>);
  mountTest(() => <Button size="large" type="primary">Primary</Button>);
  mountTest(() => <Button size="large" disabled>Disabled</Button>);
  mountTest(() => <Button size="large" type="dashed">Dashed</Button>);
  mountTest(() => <Button size="large" danger>Danger</Button>);
  mountTest(() => <Button size="large" type="ghost">Ghost</Button>);
  
});
