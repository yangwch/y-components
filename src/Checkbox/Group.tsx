import React, { useCallback, useState } from 'react';
import GroupContext from './GroupContext';

interface CheckboxGroupProps {
  disabled?: boolean;
  name?: string;
  defaultValue?: string[] | string;
  value?: string[] | string;
  children: React.ReactNode;
  onChange?: (checkedValue: string[] | string) => void;
  type?: 'checkbox' | 'radio';
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props: CheckboxGroupProps) => {
  const { disabled, name, defaultValue, value, onChange, children, type } = props;
  const isControlled = 'value' in props;
  const [checked, setChecked] = useState<string[]>(() => {
    const values = (isControlled ? value : defaultValue) || [];
    return values instanceof Array ? values : (values && [values]) || [];
  });

  const checkHandler = useCallback(
    (values: string[]) => {
      if (isControlled) {
        return;
      }
      setChecked(values);
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
