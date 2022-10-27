import React from 'react';
import useForm from './hooks/useForm';
import { FormInstance } from './interface';

type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'children' | 'onSubmit'>;

export interface FormProps<Values = any> extends BaseFormProps {
  name?: string;
  form?: FormInstance<Values>;
  children?: React.ReactNode | ((form: FormInstance<Values>) => JSX.Element);
}

const InternalForm = React.forwardRef<HTMLFormElement, FormProps>(function (props, ref) {
  const { name, form, children, ...rest } = props;
  const formInstance = useForm(form);
  return (
    <form name={name} ref={ref} {...rest}>
      {typeof children === 'function' ? children(formInstance) : children}
    </form>
  );
});

const Form = InternalForm;
export default Form;
