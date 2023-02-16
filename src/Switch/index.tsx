import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';
import { settings } from '../utils/global';
import { SizeType } from '../_utils/size';
import './style/index.less';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  checkedText?: ReactNode;
  uncheckedText?: ReactNode;
  size?: SizeType;
  className?: string;
  disabled?: boolean
}

const prefix = settings.prefix;
const switchCls = `${prefix}-switch`;

function Switch(props: SwitchProps) {
  const {
    checked: customChecked,
    defaultChecked,
    checkedText,
    uncheckedText,
    size,
    className,
    disabled
  } = props;
  const [checked, setChecked] = useState<boolean>((): boolean => {
    if ('checked' in props) return !!customChecked;
    if ('defaultChecked' in props) return !!defaultChecked;
    return false;
  });

  const clsNames = classNames(switchCls, {
    [`${switchCls}-checked`]: checked,
    [`${switchCls}-${size}`]: !!size
  }, className);

  const knobClsNames = `${switchCls}-knob`;
  const checkedTextClsNames = `${switchCls}-checked-text`;
  const uncheckedTextClsNames = `${switchCls}-unchecked-text`;
  const nativeControlClsNames = `${switchCls}-native-control`;
  return (
    <div className={clsNames}>
      <div className={knobClsNames} aria-hidden="true"></div>

      {checked ? <div className={checkedTextClsNames}>{checkedText}</div> : null}
      {!checked ? <div className={uncheckedTextClsNames}>{uncheckedText}</div> : null}
      <input
        type="checkbox"
        className={nativeControlClsNames}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
      />
    </div>
  );
}

export default Switch;
