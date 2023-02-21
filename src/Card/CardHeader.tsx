import React, { CSSProperties } from 'react';
import { cardPrefix } from './Card';

const CardHeader = ({
  title,
  extra,
  style,
}: {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  style?: CSSProperties;
}) => {
  if (!title && !extra) return null;
  return (
    <div style={style} className={`${cardPrefix}-head`}>
      <div className={`${cardPrefix}-head-title`}>{title}</div>
      <div className={`${cardPrefix}-head-extra`}>{extra}</div>
    </div>
  );
};

export default CardHeader;
