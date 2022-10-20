import React from 'react';
import './style/index.less';

export type DividerType = 'horizontal' | 'vertical';

interface DividerProps {
  type?: DividerType;
}
function Divider(props: DividerProps) {
  const { type } = props;
  return <div>Divider</div>;
}

export default Divider;
