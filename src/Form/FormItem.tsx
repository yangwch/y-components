import React from 'react';
import Schema, { Rule } from 'async-validator';
import { useFormState } from './FormContext';
import { FieldValue, FormInstance } from './interface';
import useMountCall from '../_utils/useMountCall';
import { settings } from '../utils/global';
import identity from '../_utils/identity';

type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;

type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;
interface FormItemProps {
  label?: React.ReactNode;
  required?: boolean;
  name?: string;
  rule?: Rule;
  children: ChildrenType;
  initialValue?: FieldValue;
}

const getFieldName = (name?: string) => {
  if (!name) {
    return `${settings.prefix}${identity.create()}`;
  }
  return name;
};

function FormItem(props: FormItemProps) {
  const { children, name, initialValue } = props;
  const formContext = useFormState();
  if (!formContext || !formContext.form) {
    throw new Error('FormItem should be nested in Form');
  }

  const fieldName = getFieldName(name);
  useMountCall(() => {
    formContext.form?.setFieldValue(fieldName, initialValue);
  }, [fieldName, formContext.form, initialValue]);
  return <div>{typeof children === 'function' ? children(formContext.form) : children}</div>;
}

export default FormItem;
