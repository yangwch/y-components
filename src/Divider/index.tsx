import classNames from 'classnames';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { settings } from '../utils/global';
import './style/index.less';

const prefix = settings.prefix;

export type DividerType = 'horizontal' | 'vertical';

export type Alignment = 'left' | 'center' | 'right'

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  type?: DividerType;
  children?: React.ReactNode;
  align?: Alignment
}
function Divider(props: DividerProps) {
  const { type, children, align, ...rest } = props;

  const direction: string = type || 'horizontal'
  const cls = classNames(
    `${prefix}-divider`,
    `${prefix}-divider-${direction}`,
    {
      [`${prefix}-divider-${align}`]: !!align

    }
  );
  return (
    <div className={cls} {...rest}>
      <span className="text">{children}</span>
    </div>
  );
}

export default Divider;
