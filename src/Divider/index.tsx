import classNames from 'classnames';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { settings } from '../utils/global';
import './style/index.less';

const prefix = settings.prefix;

export type DividerType = 'horizontal' | 'vertical';

export type Alignment = 'left' | 'center' | 'right';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 分隔线类型
   * @type "horizontal" | "vertical"
   * @default horizontal
   */
  type?: DividerType;
  /**
   * 文字横向定位方式
   * @type "center" | "left" | "right"
   */
  align?: Alignment;
  /**
   * 类名
   */
  className?: string;
  /**
   * 自定义行内样式
   * @type CSSProperties
   */
  style?: CSSProperties;
  children?: React.ReactNode;
}
function Divider(props: DividerProps) {
  const { type, children, align, className, style, ...rest } = props;

  const direction: string = type || 'horizontal';
  const cls = classNames(
    `${prefix}-divider`,
    `${prefix}-divider-${direction}`,
    {
      [`${prefix}-divider-${align}`]: !!align,
    },
    className,
  );
  return (
    <div className={cls} style={style} {...rest}>
      <span className="text">{children}</span>
    </div>
  );
}

export default Divider;
