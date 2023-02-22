import React, { useCallback, useEffect, useState } from 'react';
import GroupContext from './GroupContext';

interface CheckboxGroupProps {
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 所有Checkbox的name属性
   */
  name?: string;
  /**
   * @description 默认选中项
   * @type string[] | string
   */
  defaultValue?: string[] | string;
  /**
   * @description 受控模式选中项
   * @type string[] | string
   */
  value?: string[] | string;
  /**
   * @description 选中项变化回调
   * @type function(checkedValue: string[] | string)
   */
  onChange?: (checkedValue: string[] | string) => void;
  /**
   * @description Checkbox类型 'checkbox' | 'radio'
   */
  type?: 'checkbox' | 'radio';
  children: React.ReactNode;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props: CheckboxGroupProps) => {
  const { disabled, name, defaultValue, value, onChange, children, type } = props;
  const isControlled = 'value' in props;
  const getDefValue = () => {
    const values = (isControlled ? value : defaultValue) || [];
    return values instanceof Array ? values : (values && [values]) || [];
  };
  const [checked, setChecked] = useState<string[]>(getDefValue);

  useEffect(() => {
    setChecked(getDefValue());
  }, [defaultValue, value]);

  const checkHandler = useCallback(
    (values: string[]) => {
      console.log('group values', values);

      if (!isControlled) {
        setChecked(values);
      }
      if (onChange) {
        onChange(type === 'radio' ? values[0] : values);
      }
    },
    [onChange, isControlled, setChecked, type],
  );
  return (
    <GroupContext.Provider
      value={{ disabled: !!disabled, name, value: checked, setChecked: checkHandler, type }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export default CheckboxGroup;
