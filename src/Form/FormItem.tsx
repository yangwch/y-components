import React from 'react';
import { useFormState } from './FormContext';

interface FormItemProps {
  required?: boolean;
  name?: string;
}

function FormItem() {
  const formState = useFormState();
  if (!formState || !formState.form) {
    throw new Error('FormItem should be nested in Form')
  }
  return <div>FormItem</div>;
}

export default FormItem;
