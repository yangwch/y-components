import React, { MouseEvent } from 'react';

interface CloseButtonProps {
  prefixCls: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}
function CloseButton(props: CloseButtonProps) {
  const { prefixCls, onClick, children } = props;
  return (
    <button className={`${prefixCls}-close`} aria-label="Close" onClick={onClick}>
      {children || '×'}
    </button>
  );
}

export default CloseButton;
