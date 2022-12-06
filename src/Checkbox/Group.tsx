import React, { useCallback, useState } from 'react';
import GroupContext from './GroupContext';

interface CheckboxGroupProps {
  disabled?: boolean;
  name?: string;
  defaultValue?: string[];
  value?: string[];
  children: React.ReactNode;
  onChange?: (checkedValue: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props: CheckboxGroupProps) => {
  const { disabled, name, defaultValue, value, onChange, children } = props;
  const isControlled = 'value' in props;
  const [checked, setChecked] = useState<string[]>(
    () => (isControlled ? value : defaultValue) || [],
  );

  const checkHandler = useCallback(
    (values: string[]) => {
      if (isControlled) {
        return;
      }
      setChecked(values);
      if (onChange) {
        onChange(values);
      }
    },
    [onChange, isControlled, setChecked],
  );
  return (
    <GroupContext.Provider
      value={{ disabled: !!disabled, name, value: checked, setChecked: checkHandler }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export default CheckboxGroup;
