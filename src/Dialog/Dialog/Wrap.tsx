import classNames from 'classnames';
import React, { CSSProperties, MouseEvent, ReactNode } from 'react';
import Card from '../../Card';
import CloseButton from './CloseButton';
import Header from './Header';

interface WrapProps {
  prefixCls: string;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  title: React.ReactNode;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
  closeIcon?: ReactNode;
  closable?: boolean;
}

function Wrap(props: WrapProps) {
  const { prefixCls, children, style, className, title, onClose, closeIcon, closable } = props;
  return (
    <Card tabIndex={-1} className={classNames(`${prefixCls}-content`, className)} style={style}>
      {closable ? (
        <CloseButton prefixCls={prefixCls} onClick={onClose}>
          {closeIcon}
        </CloseButton>
      ) : null}
      <Header prefixCls={prefixCls}>{title}</Header>
      {children}
    </Card>
  );
}

export default Wrap;
