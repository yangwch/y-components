import React from 'react';
import classNames from 'classnames';
import { sizeClassNameMap, SizeType } from '../_utils/size';
import { settings } from '../utils/global';

export const inputPrefix = `${settings.prefix}-input`;

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  defaultValue?: string;
  bordered?: boolean;
  disabled?: boolean;
  size?: SizeType;
}

function InternalInput(props: InputProps) {
  const { className, value, defaultValue, bordered, disabled, size, ...rest } = props;
  const classes = classNames(className, inputPrefix, {
    [`${inputPrefix}-disabled`]: disabled,
    [`${inputPrefix}-${sizeClassNameMap[size || 'middle']}`]: !!sizeClassNameMap[size || 'middle'],
    [`${inputPrefix}-noborder`]: !!bordered
  });
  return <input className={classes} disabled={disabled} {...rest} />;
}

const Input = React.forwardRef(InternalInput);

export default Input;
