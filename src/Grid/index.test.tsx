import React from 'react';
import { render } from '@testing-library/react';
import { mountTest } from '../../test/shared/mountTest';

import { Row, Col } from './index';

describe('Button', () => {
  mountTest(() => <Row></Row>);
  mountTest(() => (
    <Row wrap={false}>
      <Col></Col>
    </Row>
  ));
  mountTest(() => (
    <Row>
      <Col span={1}></Col>
      <Col span={2}></Col>
    </Row>
  ));

  it('render correctly', () => {
    const renderFn = () =>
      render(
        <Row>
          <Col>test</Col>
        </Row>,
      );
    expect(renderFn).not.toThrowError();

    const { container } = renderFn();
    expect(container.firstChild).toMatchSnapshot();
  });
});
