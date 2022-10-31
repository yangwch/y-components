import React, { CSSProperties } from 'react';
import Schema, { Rule } from 'async-validator';
import { useFormState } from './FormContext';
import { FieldValue, FormInstance } from './interface';
import useMountCall from '../_utils/useMountCall';
import { getFieldName } from './utils/form';
import classNames from 'classnames';
import { settings } from '../utils/global';
import { Col, Row } from '../Grid';

type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;

type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;
interface FormItemProps {
  label?: React.ReactNode;
  required?: boolean;
  name?: string;
  rule?: Rule;
  children?: ChildrenType;
  initialValue?: FieldValue;
  className?: string;
  style?: CSSProperties;
  inline?: boolean;
}

const formItemPrefix = `${settings.prefix}-form-item`;


function FormItem(props: FormItemProps) {
  const { children, name, initialValue, style, className, label } = props;
  const formContext = useFormState();
  if (!formContext || !formContext.form) {
    throw new Error('FormItem should be nested in Form');
  }

  const { form, labelAlign = 'left', labelCol, wrapperCol, hideLabels } = formContext;

  const fieldName = getFieldName(name);
  useMountCall(() => {
    if (form) {
      form?.setFieldValue(fieldName, initialValue);
    }
  }, [fieldName, form, initialValue]);

  const classes = classNames(formItemPrefix, className);
  if (hideLabels) {
    return (
      <div className={classes} style={style}>
        {typeof children === 'function' ? children(formContext.form) : children}
      </div>
    );
  }

  return (
    <Row>
      <Col {...labelCol} style={{ ...labelCol?.style, textAlign: labelAlign}}>{label}</Col>
      <Col {...wrapperCol}>{typeof children === 'function' ? children(form) : children}</Col>
    </Row>
  );
}

export default FormItem;
