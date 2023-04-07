import classNames from 'classnames';
import React, {
  ChangeEvent,
  createRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { settings } from '../_utils/global';
import { sizeClassNameMap, SizeType } from '../_utils/size';
import './style/index.less';

export interface SwitchProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * @description 是否选中
   * @default 'false'
   */
  checked?: boolean;
  /**
   * @description 初始是否选中
   * @default 'false'
   */
  defaultChecked?: boolean;
  /**
   * @description 打开时展示的内容, size 为 small 时无效
   */
  checkedText?: ReactNode;
  /**
   * @description 关闭时展示的内容, size 为 small 时无效
   */
  uncheckedText?: ReactNode;
  /**
   * @description 尺寸,可选值large,middle,small
   */
  size?: SizeType;
  /**
   * @description 类名
   */
  className?: string;

  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 变化时回调函数
   * @type (checked: boolean) => void
   */
  onChange?: (checked: boolean) => void;
  /**
   * @description dom中input[type=checkbox]的id
   */
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

  useEffect(() => {
    setChecked(!!customChecked);
  }, [customChecked]);

  const sizeTypeStr = sizeClassNameMap[size || 'middle'];

  const clsNames = classNames(
    switchCls,
    {
      [`${switchCls}-checked`]: checked,
      [`${switchCls}-${sizeTypeStr}`]: !!sizeTypeStr,
      [`${switchCls}-disabled`]: !!disabled,
    },
    className,
  );

  const knobClsNames = `${switchCls}-knob`;
  const checkedTextClsNames = `${switchCls}-checked-text`;
  const uncheckedTextClsNames = `${switchCls}-unchecked-text`;
  const nativeControlClsNames = `${switchCls}-native-control`;
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const nativeChecked = e.target.checked;
    if (onChange) {
      onChange(nativeChecked);
    }
    if (isControlled) {
      e.target.checked = checked;
      return;
    }
    setChecked(nativeChecked);
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

export const Switch = React.forwardRef(InternalSwitch);
