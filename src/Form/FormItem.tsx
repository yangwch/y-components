import React, { CSSProperties, Fragment, useCallback, useMemo } from 'react';
import { Rule, ValidateError } from 'async-validator';
import { FormContextProps, useFormState } from './FormContext';
import { FieldValue, FormInstance } from './interface';
import useMountCall from '../_utils/useMountCall';
import { execIsRequired, getFieldName, getFieldRule } from './utils/form';
import classNames from 'classnames';
import { settings } from '../utils/global';
import { Col, Row } from '../Grid';
import { withContext } from './hocs/withContext';

type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;

type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;
export interface FormItemProps {
  label?: React.ReactNode;
  required?: boolean;
  name?: string;
  rule?: Rule;
  children?: ChildrenType;
  initialValue?: FieldValue;
  className?: string;
  style?: CSSProperties;
  inline?: boolean;
  formContext: FormContextProps;
  errors: ValidateError[];
}

const formItemPrefix = `${settings.prefix}-form-item`;

const RequiredMark = () => {
  return <span className={`${formItemPrefix}-required`}>*</span>;
};

interface ErrorLabelProps {
  error: ValidateError;
}
const ErrorLabel = (props: ErrorLabelProps) => {
  const { error } = props;
  if (error.message) {
    return <div className={`${formItemPrefix}-error-message`}>{error.message}</div>;
  }
  return null;
};

function FormItem(props: FormItemProps) {
  const { children, name, initialValue, style, className, label, rule, required, formContext } =
    props;

  const { form, labelAlign = 'left', labelCol, wrapperCol, hideLabels } = formContext;
  if (!form) {
    return null;
  }

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

  const errors = form.getErrors()[fieldName] || [];

  const classes = classNames(
    formItemPrefix,
    {
      [`${formItemPrefix}-error`]: errors?.length > 0,
    },
    className,
  );

  const renderInputNode = () => {
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

  const renderError = () => {
    if (errors?.length) {
      const [error] = errors;
      return <ErrorLabel error={error} />;
    }
    return null;
  };

  if (hideLabels) {
    return (
      <div className={classes} style={style}>
        <>
          {renderInputNode()}
          {renderError()}
        </>
      </div>
    );
  }

  const isRequired = execIsRequired(required, rule);

  return (
    <Row>
      <Col {...labelCol} style={{ ...labelCol?.style, textAlign: labelAlign }}>
        {isRequired ? <RequiredMark /> : null} {label}
      </Col>
      <Col {...wrapperCol}>
        <>
          {renderInputNode()}
          {renderError()}
        </>
      </Col>
    </Row>
  );
}

export default withContext(React.memo(FormItem));
