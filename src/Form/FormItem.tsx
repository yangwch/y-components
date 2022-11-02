import React, { CSSProperties, useCallback, useMemo } from 'react';
import Schema, { Rule } from 'async-validator';
import { useFormState } from './FormContext';
import { FieldValue, FormInstance } from './interface';
import useMountCall from '../_utils/useMountCall';
import { execIsRequired, getFieldName, getFieldRule } from './utils/form';
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

const RequiredMark = () => {
  return <span className={`${formItemPrefix}-required`}>*</span>;
};

function FormItem(props: FormItemProps) {
  const { children, name, initialValue, style, className, label, rule, required } = props;
  const formContext = useFormState();
  if (!formContext || !formContext.form) {
    throw new Error('FormItem should be nested in Form');
  }

  const { form, labelAlign = 'left', labelCol, wrapperCol, hideLabels } = formContext;

  const fieldName = useMemo(() => getFieldName(name), [name]);
  useMountCall(() => {
    if (form && initialValue) {
      form?.setFieldValue(fieldName, initialValue);
    }
  }, [fieldName, form, initialValue]);

  useMountCall(() => {
    if (form) {
      form.setFieldRule(fieldName, getFieldRule(required, rule));
    }
  }, [form, fieldName, required]);

  const fieldValue = form.getFieldValue(fieldName);
  const onFieldValueChange = useCallback(
    (value: any) => {
      const childEle = children && (children as React.ReactElement);
      if (childEle && childEle.props?.onChange) {
        childEle.props.onChange(value);
      }
      form.setFieldValue(fieldName, value);
    },
    [fieldName, form],
  );

  const classes = classNames(formItemPrefix, className);

  const renderChildNode = () => {
    if (typeof children === 'function') {
      return children(form);
    }
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...children.props,
        value: fieldValue,
        onChange: onFieldValueChange,
      });
    } else {
      console.warn('Form item children is not a valid ReactElement');
    }
  };
  if (hideLabels) {
    return (
      <div className={classes} style={style}>
        {renderChildNode()}
      </div>
    );
  }

  const isRequired = execIsRequired(required, rule);

  return (
    <Row>
      <Col {...labelCol} style={{ ...labelCol?.style, textAlign: labelAlign }}>
        {isRequired ? <RequiredMark /> : null} {label}
      </Col>
      <Col {...wrapperCol}>{renderChildNode()}</Col>
    </Row>
  );
}

export default FormItem;
