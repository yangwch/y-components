import React, { FormEvent, useCallback, useEffect, useRef } from 'react';
import { ColProps } from '../Grid/Col';
import FormProvider from './FormContext';
import InternalFormItem from './FormItem';
import useForm from './hooks/useForm';
import { FieldsChangeListener, FormInstance, FormLabelAlign, FormState } from './interface';
import './style/index.less';

type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'children' | 'onSubmit'>;

export interface FormProps<Values = any> extends BaseFormProps {
  /**
   * 是否纵向排列
   * @default false
   */
  vertical?: boolean;
  /**
   * 标签布局
   * @type "left" | "right" | "center"
   */
  labelAlign?: FormLabelAlign;
  /**
   * 标签栅格布局
   * @type ColProps
   */
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  name?: string;
  form?: FormInstance<Values>;
  children?: React.ReactNode | ((form: FormInstance<Values>) => JSX.Element);
  initialValues?: FormState;
  hideLabels?: boolean;
  inline?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>, values: Values, form: FormInstance<Values>) => void;
  onFieldsChange?: FieldsChangeListener;
}

const InternalForm = React.forwardRef<HTMLFormElement, FormProps>(function (props, ref) {
  const {
    name,
    form,
    children,
    initialValues = {},
    labelCol,
    wrapperCol,
    hideLabels,
    inline,
    onSubmit,
    onFieldsChange,
    ...rest
  } = props;
  const formInstance = useForm(form);

  const mountRef = useRef<boolean>(false);
  if (!mountRef.current) {
    mountRef.current = true;
    formInstance.setInitialFieldValues(initialValues, !mountRef.current);
  }
  const { vertical, labelAlign } = props;
  const onFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      if (onSubmit && formInstance) {
        onSubmit(e, formInstance.getFieldsValue(), formInstance);
      }
    },
    [formInstance, onSubmit],
  );
  useEffect(() => {
    formInstance.setFieldsChangeListender(onFieldsChange);
  }, [onFieldsChange]);
  return (
    <FormProvider
      form={formInstance}
      vertical={vertical}
      labelAlign={labelAlign}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      hideLabels={hideLabels}
      inline={inline}
    >
      <form name={name} ref={ref} onSubmit={onFormSubmit} {...rest}>
        {typeof children === 'function' ? children(formInstance) : children}
      </form>
    </FormProvider>
  );
});

interface CompoundedForm
  extends React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>> {
  useForm: <Values = any>(form?: FormInstance<Values>) => FormInstance<Values>;
  Item: typeof InternalFormItem;
}

const Form = InternalForm as CompoundedForm;
Form.useForm = useForm;
Form.Item = InternalFormItem;

export default Form;
