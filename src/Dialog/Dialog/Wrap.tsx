import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import Card from '../../Card';
import Header from './Header';

interface WrapProps {
  prefixCls: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
  title: React.ReactNode
}

function Wrap(props: WrapProps) {
  const { prefixCls, children, style, className, title } = props;
  return (
    <Card tabIndex={-1} className={classNames(`${prefixCls}-content`, className)} style={style}>
      <Header prefixCls={prefixCls}>{title}</Header>
      {children}
    </Card>
  );
}

export default Wrap;
