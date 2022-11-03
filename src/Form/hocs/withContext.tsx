import React, { useMemo } from 'react';
import { useFormState } from '../FormContext';
import { FormItemProps } from '../FormItem';
import { getFieldName } from '../utils/form';


export function withContext(WrappedComponent: any) {
  const hocComponent = (props: FormItemProps) => {
    const formContext = useFormState();
    if (!formContext || !formContext.form) {
      throw new Error('FormItem should be nested in Form');
    }
    const form = formContext.form;
    const { name } = props;
    const fieldName = useMemo(() => getFieldName(name), [name]);
    const errors = form.getErrors()[fieldName] || [];

    return <WrappedComponent {...props} errors={errors} formContext={formContext} />;
  };
  return hocComponent;
}

