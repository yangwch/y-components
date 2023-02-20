import classNames from 'classnames';
import React, { ChangeEvent, createRef, HTMLAttributes, ReactNode, useState } from 'react';
import { settings } from '../utils/global';
import { sizeClassNameMap, SizeType } from '../_utils/size';
import './style/index.less';

export interface SwitchProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  checkedText?: ReactNode;
  uncheckedText?: ReactNode;
  size?: SizeType;
  className?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
}

const prefix = settings.prefix;
const switchCls = `${prefix}-switch`;

function InternalSwitch(props: SwitchProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const {
    checked: customChecked,
    defaultChecked,
    checkedText,
    uncheckedText,
    size,
    className,
    disabled,
    onChange,
    id,
    ...switchProps
  } = props;
  const switchRef = ref || createRef<HTMLInputElement>();
  const isControlled = 'checked' in props;
  const [checked, setChecked] = useState<boolean>((): boolean => {
    if (isControlled) return !!customChecked;
    if ('defaultChecked' in props) return !!defaultChecked;
    return false;
  });

  const sizeTypeStr = sizeClassNameMap[size || 'middle']

  const clsNames = classNames(
    switchCls,
    {
      [`${switchCls}-checked`]: checked,
      [`${switchCls}-${sizeTypeStr}`]: !!sizeTypeStr,
      [`${switchCls}-disabled`]: !!disabled
    },
    className,
  );

  const knobClsNames = `${switchCls}-knob`;
  const checkedTextClsNames = `${switchCls}-checked-text`;
  const uncheckedTextClsNames = `${switchCls}-unchecked-text`;
  const nativeControlClsNames = `${switchCls}-native-control`;
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const nativeChecked = e.target.checked;
    if (isControlled) {
      e.target.checked = checked;
      return;
    }
    setChecked(nativeChecked);
    if (onChange) {
      onChange(nativeChecked);
    }
  };
  const showText = size !== 'small';
  return (
    <div className={clsNames}>
      <div className={knobClsNames} aria-hidden="true"></div>
      {checked && showText ? <div className={checkedTextClsNames}>{checkedText}</div> : null}
      {!checked && showText ? <div className={uncheckedTextClsNames}>{uncheckedText}</div> : null}
      <input
        {...switchProps}
        ref={switchRef}
        id={id}
        type="checkbox"
        checked={checked}
        className={nativeControlClsNames}
        role="switch"
        disabled={disabled}
        aria-checked={checked}
        aria-disabled={disabled}
        onChange={onChangeHandle}
      />
    </div>
  );
}

const Switch = React.forwardRef(InternalSwitch);

export default Switch;
