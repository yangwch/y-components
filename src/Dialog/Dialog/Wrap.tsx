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
    <div className={classNames(`${prefixCls}-content`, className)} style={style}>
      <Card tabIndex={-1}>
        {closable ? (
          <CloseButton prefixCls={prefixCls} onClick={onClose}>
            {closeIcon}
          </CloseButton>
        ) : null}
        <Header prefixCls={prefixCls}>{title}</Header>
        {children}
      </Card>
    </div>
  );
}

export default Wrap;
