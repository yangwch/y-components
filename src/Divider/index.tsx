import classNames from 'classnames';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { settings } from '../utils/global';
import './style/index.less';

const prefix = settings.prefix;

export type DividerType = 'horizontal' | 'vertical';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  type?: DividerType;
  children: React.ReactNode;
}
function Divider(props: DividerProps) {
  const { type, children, ...rest } = props;

  const direction: string = type || 'horizontal'
  const cls = classNames(
    `${prefix}-divider`,
    `${prefix}-divider-${direction}`,
  );
  return (
    <div className={cls} {...rest}>
      <span className="text">{children}Divider</span>
    </div>
  );
}

export default Divider;
