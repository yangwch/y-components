import React, { ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { sizeClassNameMap, SizeType } from '../_utils/size';
import { settings } from '../utils/global';

export const inputPrefix = `${settings.prefix}-input`;

interface InputProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'prefix'> {
  className?: string;
  value?: string;
  defaultValue?: string;
  bordered?: boolean;
  disabled?: boolean;
  size?: SizeType;
  prefix?: React.ReactNode;
}

const Input = React.forwardRef(function InternalInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { className, value: customValue, bordered, disabled, size, style, prefix, ...rest } = props;
  const [value, setValue] = useState('value' in props ? customValue : '');
  useEffect(() => {
    if ('value' in props) {
      setValue(customValue);
    }
  }, [customValue]);
  const classes = classNames(className, inputPrefix, {
    [`${inputPrefix}-disabled`]: disabled,
    [`${inputPrefix}-${sizeClassNameMap[size || 'middle']}`]: !!sizeClassNameMap[size || 'middle'],
    [`${inputPrefix}-noborder`]: !!bordered,
  });
  const renderPrefix = () => {
    if (!prefix) return null;
    return (
      <span className={`${inputPrefix}-prefix`}>{prefix}</span>
    )
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    if (props.onChange) {
      props.onChange(e);
    }
  }
  return (
    <span className={classes} style={style}>
      {renderPrefix()}
      <input value={value} onChange={onChangeHandler} ref={ref} disabled={disabled} {...rest} />
    </span>
  );
});

export default Input;
