import React, { CSSProperties, Fragment, useCallback, useMemo } from 'react';
import { Rule, ValidateError } from 'async-validator';
import classNames from 'classnames';
import { isEqual } from 'lodash-es';
import { FormContextProps, useFormState } from './FormContext';
import { FieldValue, FormInstance } from './interface';
import useMountCall from '../_utils/useMountCall';
import { execIsRequired, getFieldName, getFieldRule } from './utils/form';
import { settings } from '../utils/global';
import { Col, Row } from '../Grid';

interface WithContextProps {
  name?: string;
}

export function withContext(WrappedComponent: React.ComponentType<FormItemProps>) {
  const hocComponent = (
    props: WithContextProps & Omit<FormItemProps, 'formContext' | 'errors'>,
  ) => {
    const formContext = useFormState();
    if (!formContext || !formContext.form) {
      throw new Error('FormItem should be nested in Form');
    }
    const form = formContext.form;
    const { name } = props;
    const fieldName = useMemo(() => getFieldName(name), [name]);
    const errors = form.getErrors()[fieldName] || [];

    return (
      <WrappedComponent {...props} name={fieldName} errors={errors} formContext={formContext} />
    );
  };
  return hocComponent;
}

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

function InternalFormItem(props: FormItemProps) {
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

const WithContext = withContext(React.memo(InternalFormItem, (prev, next) => isEqual(prev, next)));

export default WithContext;
