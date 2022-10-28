import React, { useRef } from 'react';
import { ColProps } from '../Grid/Col';
import FormProvider, { FormContext } from './FormContext';
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
}

const InternalForm = React.forwardRef<HTMLFormElement, FormProps>(function (props, ref) {
  const { name, form, children, initialValues = {}, ...rest } = props;
  const formInstance = useForm(form);

  const mountRef = useRef<boolean>(false);
  if (!mountRef.current) {
    mountRef.current = true;
    formInstance.setInitialFieldValues(initialValues, !mountRef.current);
  }
  const { vertical, labelAlign, labelCol, wrapperCol } = props;
  return (
    <FormProvider
      form={form}
      vertical={vertical}
      labelAlign={labelAlign}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
    >
      <form name={name} ref={ref} {...rest}>
        {typeof children === 'function' ? children(formInstance) : children}
      </form>
    </FormProvider>
  );
});

interface CompoundedForm
  extends React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>> {
  useForm: <Values = any>(form?: FormInstance<Values>) => FormInstance<Values>;
}

const Form = InternalForm as CompoundedForm;
Form.useForm = useForm;

export default Form;
