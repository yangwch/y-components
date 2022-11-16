import classNames from 'classnames';
import React, { ChangeEvent, CSSProperties, KeyboardEvent, useState } from 'react';
import { settings } from '../utils/global';

const prefixCls = `${settings.prefix}-checkbox`;

interface CheckBoxProps {
  className?: string;
  name?: string;
  id?: string;
  type?: 'checkbox' | 'radio';
  style?: CSSProperties;
  title?: string;
  defaultChecked?: number | boolean;
  checked?: number | boolean;
  disabled?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  readOnly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  value?: any;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC = React.forwardRef<HTMLSpanElement, CheckBoxProps>(
  (props: CheckBoxProps, ref) => {
    const {
      className,
      name,
      style,
      id,
      type = 'checkbox',
      title,
      required,
      readOnly,
      disabled,
      tabIndex,
      onClick,
      onChange,
      onFocus,
      onBlur,
      value,
      onKeyUp,
      onKeyDown,
      onKeyPress,
      autoFocus,
    } = props;
    const [checked, setChecked] = useState<boolean>(
      !!('checked' in props ? props.checked : props.defaultChecked),
    );

    const classes = classNames(className, prefixCls, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (!('checked' in props)) {
        setChecked(e.target.checked);
      }
      if (onChange) {
        onChange(e);
      }
    };
    return (
      <span className={classes} style={style} ref={ref}>
        <input
          name={name}
          id={id}
          type={type}
          title={title}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          className={`${prefixCls}-input`}
          checked={!!checked}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onChange={handleChange}
          autoFocus={autoFocus}
          value={value}
        />
        <span className={`${prefixCls}-inner`} />
      </span>
    );
  },
);

export default Checkbox;
