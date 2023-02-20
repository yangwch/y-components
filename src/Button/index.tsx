import React, { RefObject } from 'react';
import classNames from 'classnames';
import { settings } from '../utils/global';
import { tuple } from '../_utils/type';
import './style/index.less';
import { sizeClassNameMap, SizeType } from '../_utils/size';
import ButtonGroup from './ButtonGroup';

const cls_prefix = settings.prefix;

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');

export type ButtonType = typeof ButtonTypes[number];

interface BaseButtonProps {
  /**
   * @description 按钮类型："default" | "primary" | "ghost" | "dashed" | "link" | "text"
   */
  type?: ButtonType;
  children?: React.ReactNode;
  /**
   * @description 设置危险按钮
   */
  danger?: Boolean;
  /**
   * @description 是否禁用
   * @default 'false'
   */
  disabled?: Boolean;
  /**
   * @description 尺寸："small" | "middle" | "large"
   * @default 'middle'
   */
  size?: SizeType;
  /**
   * @description 类名
   */
  className?: string;
}
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  /**
   * @description 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps>;

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
  Group: typeof ButtonGroup;
}

const Button = React.forwardRef(function Button(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
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
}) as CompoundedComponent;

Button.Group = ButtonGroup;

export { Button, ButtonGroup };
