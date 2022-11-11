import React from 'react';

interface ItemProps {
  className: string;
  children?: React.ReactNode;
  index: number;
  style?: React.CSSProperties;
}
function Item(props: ItemProps) {
  const { className, index, children } = props;
  return (
    <div className={className} data-item-index={index}>
      {children}
    </div>
  );
}

export default Item;
