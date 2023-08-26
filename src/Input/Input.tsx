import classNames from 'classnames';
import React, { HTMLInputTypeAttribute } from 'react';
import { settings } from '../_utils/global';
import { sizeClassNameMap, SizeType } from '../_utils/size';

export const inputPrefix = `${settings.prefix}-input`;

interface InputProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'prefix'> {
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
}

const Input = React.forwardRef(function InternalInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { className, bordered, disabled, size, style, prefix, ...rest } = props;

  const classes = classNames(className, inputPrefix, {
    [`${inputPrefix}-disabled`]: disabled,
    [`${inputPrefix}-${sizeClassNameMap[size || 'middle']}`]: !!sizeClassNameMap[size || 'middle'],
    [`${inputPrefix}-noborder`]: !!bordered,
  });
  const renderPrefix = () => {
    if (!prefix) return null;
    return <span className={`${inputPrefix}-prefix`}>{prefix}</span>;
  };

  return (
    <span className={classes} style={style}>
      {renderPrefix()}
      <input ref={ref} disabled={disabled} {...rest} />
    </span>
  );
});

export default Input;
