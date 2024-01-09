import classNames from 'classnames';
import React, { ComponentType, HTMLInputTypeAttribute } from 'react';
import { settings } from '../_utils/global';
import { sizeClassNameMap, SizeType } from '../_utils/size';

export const inputPrefix = `${settings.prefix}-input`;

export interface InputProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'prefix'> {
  type?: HTMLInputTypeAttribute;
  /**
   * 类名
   */
  className?: string;
  /**
   * 输入框值
   */
  value?: any;
  /**
   * 输入框默认值
   */
  defaultValue?: any;
  /**
   * 是否显示边框
   * @default true
   */
  bordered?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 输入框尺寸
   * @type "small" | "middle" | "large"
   */
  size?: SizeType;
  /**
   * 输入框文字之前插入内容
   * @type ReactNode
   */
  prefix?: React.ReactNode;
  /**
   * 最小输入长度
   */
  minLength?: number;
  /**
   * 最大输入长度
   */
  maxLength?: number;
  prefixComponent?: ComponentType;
}

export const Input = React.forwardRef(function InternalInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    className,
    bordered,
    disabled,
    size,
    style,
    prefix,
    prefixComponent: PrefixComponent = 'span',
    ...rest
  } = props;

  const classes = classNames(className, inputPrefix, {
    [`${inputPrefix}-disabled`]: disabled,
    [`${inputPrefix}-${sizeClassNameMap[size || 'middle']}`]: !!sizeClassNameMap[size || 'middle'],
    [`${inputPrefix}-noborder`]: !!bordered,
  });
  const renderPrefix = () => {
    if (!prefix) return null;
    if (PrefixComponent === React.Fragment) {
      return prefix;
    }
    return <PrefixComponent className={`${inputPrefix}-prefix`}>{prefix}</PrefixComponent>;
  };

  return (
    <span className={classes} style={style}>
      {renderPrefix()}
      <input ref={ref} disabled={disabled} {...rest} />
    </span>
  );
});
