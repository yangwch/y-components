import classNames from 'classnames';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { settings } from '../_utils/global';
import CardHeader from './CardHeader';
import './style/index.less';

export const cardPrefix = `${settings.prefix}-card`;

type CardSize = 'default' | 'small';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * @description 自定义行内样式
   * @type CSSProperties
   */
  style?: CSSProperties;
  /**
   * @description 内容区域
   * @type ReactNode
   */
  children?: React.ReactNode;
  /**
   * @description 标题
   * @type ReactNode
   */
  title?: React.ReactNode;
  /**
   * @description 卡片标题右侧的额外内容
   * @type ReactNode
   */
  extra?: React.ReactNode;
  /**
   * @description 标题内联样式
   * @type CSSProperties
   */
  headStyle?: CSSProperties;
  /**
   * @description 卡片内容区内联样式
   * @type CSSProperties
   */
  bodyStyle?: CSSProperties;
  /**
   * @description 是否有鼠标移入样式
   * @default 'false'
   */
  hoverable?: boolean;
  /**
   * @description 尺寸：default | small
   */
  size?: CardSize;
  /**
   * @description 类名
   */
  className?: string;
}

function Card(props: CardProps) {
  const { children, title, extra, style, headStyle, bodyStyle, hoverable, size, className } = props;

  const clsNames = classNames(`${cardPrefix}`, className, {
    [`${cardPrefix}-hoverable`]: hoverable,
    [`${cardPrefix}-${size}`]: !!size,
  });

  const head = <CardHeader title={title} extra={extra} style={headStyle} />;
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

export default Card;
