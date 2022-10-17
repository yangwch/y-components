import React, { RefObject } from 'react';
import classNames from 'classnames';
import { settings } from '../utils/global';
import { tuple } from '../_utils/type';
import './style/index.less';
import { sizeClassNameMap, SizeType } from '../_utils/size';

const cls_prefix = settings.prefix;

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');

export type ButtonType = typeof ButtonTypes[number];

interface BaseButtonProps {
  type?: ButtonType;
  children?: React.ReactNode;
  danger?: Boolean;
  disabled?: Boolean;
  size?: SizeType;
  className?: string;
}
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps>;

function Button(props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { type = 'default', children, danger = false, disabled, size, className, ...rest } = props;

  const clsNames = classNames(
    {
      [`${cls_prefix}-btn`]: true,
      [`${cls_prefix}-btn-${type}`]: type !== 'default',
      [`${cls_prefix}-btn-danger`]: !!danger,
      [`${cls_prefix}-btn-dashed`]: type === 'dashed',
      [`${cls_prefix}-btn-ghost`]: type === 'ghost',
      [`${cls_prefix}-btn-${sizeClassNameMap[size || 'middle'] || ''}`]: size !== undefined,
    },
    className,
  );
  return (
    <button className={clsNames} disabled={!!disabled} ref={ref} {...rest}>
      {children}
    </button>
  );
}

export default React.forwardRef(Button);
