import React, { useContext } from 'react';
import { ColProps } from '../Grid/Col';
import { FormInstance, FormLabelAlign, FormState } from './interface';

export interface FormContextProps {
  vertical?: boolean;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  // fieldValues: FormState;
  form?: FormInstance<any>;
  hideLabels?: boolean;
  inline?: boolean;
}

export const FormContext = React.createContext<FormContextProps>({
  // fieldValues: {},
  labelAlign: 'right',
});

interface FormProviderProps {
  form?: FormInstance;
  vertical?: boolean;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  children: React.ReactNode;
  hideLabels?: boolean;
  inline?: boolean;
}

export default function FormProvider(props: FormProviderProps) {
  const { form, children, vertical, labelAlign, labelCol, wrapperCol, hideLabels, inline } = props;
  return (
    <FormContext.Provider
      value={{
        form,
        vertical,
        labelAlign: labelAlign || 'right',
        labelCol,
        wrapperCol,
        hideLabels,
        inline
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormState = () => {
  const state = useContext<FormContextProps>(FormContext);
  return state;
};
