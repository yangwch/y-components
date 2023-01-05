import classNames from 'classnames';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { settings } from '../utils/global';
import './style/index.less';

const cardPrefix = `${settings.prefix}-card`;

type CardSize = 'default' | 'small';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  style?: CSSProperties;
  children?: React.ReactNode;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  headStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  hoverable?: boolean;
  size?: CardSize;
  className?: string;
}

function Card(props: CardProps) {
  const { children, title, extra, style, headStyle, bodyStyle, hoverable, size, className } = props;

  const clsNames = classNames(`${cardPrefix}`, className, {
    [`${cardPrefix}-hoverable`]: hoverable,
    [`${cardPrefix}-${size}`]: !!size,
  });

  const head = <CardHead title={title} extra={extra} style={headStyle} />;
  const body = (
    <div className={`${cardPrefix}-body`} style={bodyStyle}>
      {children}
    </div>
  );
  return (
    <div className={clsNames} style={style}>
      {head}
      {body}
    </div>
  );
}

const CardHead = ({
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

export default Card;
