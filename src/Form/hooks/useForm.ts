import { useRef } from 'react';
import useForceUpdate from '../../_utils/useForceUpate';
import { FieldName, FieldValue, FormInstance, FormState, NamePath } from '../interface';

class FormStore<Values = any> {
  private initialStore: FormState = {};

  private store: FormState = {};

  private forceUpdate: () => void = () => {};

  constructor(updator?: () => void) {
    if (updator) {
      this.forceUpdate = updator;
    }
  }

  getFieldsValue = (paths?: NamePath[]) => {
    return this.store;
  };

  getFieldValue = (path: NamePath) => {
    return this.store[path];
  };

  setInitialFieldValues = (store: FormState = {}, reload?: boolean) => {
    this.initialStore = store;
    this.store = this.initialStore;
    if (reload) {
      this.forceUpdate();
    }
  };

  setFieldValue = (fieldName: FieldName, value: FieldValue) => {
    this.store = {
      ...this.store,
      [fieldName]: value,
    };
    this.forceUpdate();
  };

  setFieldsValue = (fieldsValue: Values) => {
    this.store = {
      ...this.store,
      ...fieldsValue,
    };
    this.forceUpdate();
  };

  validateFields = (fieldNames: FieldName[]) => {
    return new Promise(() => Promise.resolve());
  };

  submit = () => {};
}

function useForm<Values = any>(form?: FormInstance<Values>): FormInstance<Values> {
  const formRef = useRef<FormInstance>();
  const forceUpdate = useForceUpdate();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      formRef.current = new FormStore(forceUpdate);
    }
  }
  return formRef.current;
}

export default useForm;
