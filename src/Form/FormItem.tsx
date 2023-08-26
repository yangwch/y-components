import { Rule, ValidateError } from 'async-validator';
import classNames from 'classnames';
import { isEqual } from 'lodash-es';
import React, { CSSProperties, useCallback, useMemo } from 'react';
import { Col, Row } from '../Grid';
import { settings } from '../_utils/global';
import useMountCall from '../_utils/useMountCall';
import { FormContextProps, useFormState } from './FormContext';
import { FieldValue, FormInstance } from './interface';
import { execIsRequired, getFieldName, getFieldRule } from './utils/form';

interface WithContextProps {
  name?: string;
  initialValue?: FieldValue;
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
    const { name, initialValue, required, rule } = props;
    const fieldName = useMemo(() => getFieldName(name), [name]);
    const errors = form.getErrors()[fieldName] || [];

    useMountCall(() => {
      if (form && initialValue && fieldName) {
        form?.setFieldValue(fieldName, initialValue);
      }
    }, [fieldName, form, initialValue]);

    useMountCall(() => {
      if (form && fieldName) {
        form.setFieldRule(fieldName, getFieldRule(required, rule));
      }
    }, [form, fieldName, required]);

    const fieldValue = form.getFieldValue(fieldName);

    return (
      <WrappedComponent
        {...props}
        value={fieldValue}
        name={fieldName}
        errors={errors}
        formContext={formContext}
      />
    );
  };
  return hocComponent;
}

type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;

type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;
export interface FormItemProps {
  /**
   * 表单项标签
   */
  label?: React.ReactNode;
  /**
   * 是否必填
   * @default false
   */
  required?: boolean;
  /**
   * 表单项 name 属性
   */
  name?: string;
  /**
   * 校验规则，参考{@link https://github.com/yiminghe/async-validator#rules}
   * @type RuleItem | RuleItem[]
   *
   */
  rule?: Rule;
  /**
   * 表单项的值
   */
  value?: FieldValue;
  /**
   * 类名
   */
  className?: string;
  /**
   * 行内样式
   * @type CSSProperties
   */
  style?: CSSProperties;
  /**
   * 错误提示
   * @type ValidateError[]
   */
  errors: ValidateError[];
  formContext: FormContextProps;
  children?: ChildrenType;
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
  const { children, name, value, style, className, label, rule, required, formContext } = props;

  const { form, labelAlign = 'left', labelCol, wrapperCol, hideLabels, inline } = formContext;
  if (!form) {
    return null;
  }
  const onFieldValueChangeGenerator = useCallback(
    (props: any) =>
      (e: any, ...attrs: any[]) => {
        if (name) {
          // 兼容原生事件
          form.setFieldValue(name, e && e.target ? e.target.value : e);
        }
        // trigger onchange event
        if (props.onChange && typeof props.onChange === 'function') {
          props.onChange(e, ...attrs);
        }
      },
    [form, name],
  );

  const errors = name ? form.getErrors()[name] || [] : [];

  const classes = classNames(
    formItemPrefix,
    {
      [`${formItemPrefix}-error`]: errors?.length > 0,
      [`${formItemPrefix}-inline`]: !!inline,
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
        value: value,
        onChange: onFieldValueChangeGenerator(children.props),
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

  const isRequired = execIsRequired(required, rule);
  const renderLabel = () => {
    const labelIns = hideLabels ? null : label;
    return (
      <div className={`${formItemPrefix}-label`}>
        {isRequired ? <RequiredMark /> : null}
        {labelIns}
      </div>
    );
  };

  if (hideLabels || inline) {
    return (
      <div className={classes} style={style}>
        <>
          {renderLabel()}
          {renderInputNode()}
          {renderError()}
        </>
      </div>
    );
  }

  return (
    <Row className={className}>
      <Col {...labelCol} style={{ ...labelCol?.style, textAlign: labelAlign }}>
        {renderLabel()}
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
