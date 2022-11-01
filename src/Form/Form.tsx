import React, { FormEvent, useCallback, useRef } from 'react';
import { ColProps } from '../Grid/Col';
import FormProvider from './FormContext';
import FormItem from './FormItem';
import useForm from './hooks/useForm';
import { FormInstance, FormLabelAlign, FormState } from './interface';

type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'children' | 'onSubmit'>;

export interface FormProps<Values = any> extends BaseFormProps {
  vertical?: boolean;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  name?: string;
  form?: FormInstance<Values>;
  children?: React.ReactNode | ((form: FormInstance<Values>) => JSX.Element);
  initialValues?: FormState;
  hideLabels?: boolean;
  inline?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>, values: Values) => void;
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
        onSubmit(e, formInstance.getFieldsValue());
      }
    },
    [formInstance, onSubmit],
  );
  return (
    <FormProvider
      form={form}
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
  Item: typeof FormItem;
}

const Form = InternalForm as CompoundedForm;
Form.useForm = useForm;
Form.Item = FormItem;

export default Form;
