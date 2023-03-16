import { useState } from 'react';

interface Props {
  controlKeys?: string[];
  defaultControlKeys?: string[];
}

const useControlState = (props: Props) => {
  const isControlled = typeof props.controlKeys !== 'undefined';

  const [values, setValues] = useState<string[]>(
    (isControlled ? props.controlKeys : props.defaultControlKeys) || [],
  );

  return {
    isControlled,
    values,
    setValues,
  };
};

export default useControlState;
