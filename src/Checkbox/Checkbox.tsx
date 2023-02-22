import classNames from 'classnames';
import React, {
  ChangeEvent,
  CSSProperties,
  KeyboardEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { settings } from '../utils/global';
import CheckboxGroup from './Group';
import GroupContext from './GroupContext';
import './style/index.less';

const prefixCls = `${settings.prefix}-checkbox`;

interface CheckBoxProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description input 的 name 属性
   */
  name?: string;
  /**
   * @description input 的 id 属性
   */
  id?: string;
  /**
   * @description 选择框类型 checkbox / radio
   */
  type?: 'checkbox' | 'radio';
  /**
   * @description 行内样式
   * @type CSSProperties
   */
  style?: CSSProperties;
  /**
   * @description input 的 title 属性
   */
  title?: string;
  /**
   * @description 初始是否选中
   */
  defaultChecked?: boolean;
  /**
   * @description 是否选中
   */
  checked?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 获得焦点时回调
   * @type function(e)
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * @description 失去焦点时回调
   * @type function(e)
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * @description 变化时回调
   * @type function(checked)
   */
  onChange?: (checkedValue: boolean) => void;
  /**
   * @description 点击事件
   * @type function(e)
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  /**
   * @description input 的 tabIndex 属性
   */
  tabIndex?: number;
  /**
   * @description input 的 readOnly 属性
   */
  readOnly?: boolean;
  /**
   * @description input 的 required 属性
   */
  required?: boolean;
  /**
   * @description 是否自动获取焦点
   */
  autoFocus?: boolean;
  /**
   * @description 当前项的值 & input 的 value 属性
   */
  value?: any;
  /**
   * @description 设置 indeterminate 状态，只渲染样式
   */
  indeterminate?: boolean;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const InternalCheckbox: React.FC = React.forwardRef<HTMLSpanElement, CheckBoxProps>(
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
      checked: customChecked,
      indeterminate,
    } = props;
    const [checked, setChecked] = useState<boolean>(
      !!('checked' in props ? props.checked : props.defaultChecked),
    );

    useEffect(() => {
      setChecked(customChecked === true);
    }, [customChecked, setChecked]);

    const classes = classNames(className, prefixCls, {
      [`${prefixCls}-checked`]: !indeterminate && checked,
      [`${prefixCls}-radio`]: type === 'radio',
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-indeterminate`]: indeterminate,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const checkedValue = e.target.checked;
      if (!('checked' in props)) {
        setChecked(checkedValue);
      }
      if (onChange) {
        onChange(checkedValue);
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

const withGroupContext =
  (WrappedComponent: React.ComponentType<CheckBoxProps>) => (props: CheckBoxProps) => {
    const groupState = useContext(GroupContext);
    if (!groupState) {
      return <WrappedComponent {...props} />;
    }
    const { value } = props;
    const { disabled, value: groupValues, setChecked, name, type } = groupState;
    const onCheckChange = useCallback(
      (checked: boolean) => {
        const getCheckedValues = (prevChecked: string[]): string[] => {
          if (type === 'radio') {
            return [value];
          }
          if (prevChecked.includes(value)) {
            if (!checked) {
              const nvalues = Array.from(prevChecked);
              nvalues.splice(nvalues.indexOf(value), 1);
              return nvalues;
            }
            return prevChecked;
          } else if (checked) {
            return prevChecked.concat(value);
          }
          return prevChecked;
        };
        setChecked(getCheckedValues(groupValues));
      },
      [setChecked, type, value, groupValues],
    );
    return (
      <WrappedComponent
        {...props}
        name={name}
        disabled={disabled}
        checked={groupValues.includes(props.value)}
        onChange={onCheckChange}
        type={type}
      />
    );
  };

interface CompoundedCheckbox extends React.ForwardRefExoticComponent<CheckBoxProps> {
  Group: typeof CheckboxGroup;
}
const Checkbox = withGroupContext(InternalCheckbox) as CompoundedCheckbox;
Checkbox.Group = CheckboxGroup;

export { Checkbox, CheckboxGroup };
