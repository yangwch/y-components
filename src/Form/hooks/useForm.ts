import { useRef } from 'react';
import { Rule, ValidateError } from 'async-validator';
import useForceUpdate from '../../_utils/useForceUpate';
import { FieldName, FieldsChangeListener, FieldValue, FormErrors, FormInstance, FormState, NamePath } from '../interface';
import Schema from 'async-validator';

class FormStore<Values = any> {
  private initialStore: FormState = {};

  private store: FormState = {};

  private forceUpdate: () => void = () => {};

  private rules: Record<string, Rule> = {};

  private errors: FormErrors = {};

  private fieldChangeListener: FieldsChangeListener | undefined;

  constructor(updator?: () => void) {
    if (updator) {
      this.forceUpdate = updator;
    }
  }

  getFieldsValue = (paths?: NamePath[]) => {
    if (!paths) {
      return this.store;
    }

    return paths.reduce((prev, path) => {
      return {
        ...prev,
        [path]: this.getFieldValue(path),
      };
    }, {});
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
    this.triggerFieldsChangeListener(fieldName);
  };

  setFieldsValue = (fieldsValue: Values) => {
    this.store = {
      ...this.store,
      ...fieldsValue,
    };
    this.forceUpdate();
  };

  setErrors = (errors: ValidateError[]) => {
    const nerrors: Record<string, ValidateError[]> = {};
    for (let i = 0; i < errors.length; i++) {
      const error = errors[i];
      if (error.field) {
        nerrors[error.field] = (nerrors[error.field] || []).concat(error);
      }
    }
    this.errors = nerrors;
    this.forceUpdate();
  };

  getErrors = () => this.errors;

  validateFields = (fieldNames?: FieldName[]) => {
    const validator = new Schema(this.rules);
    return new Promise((resolve, reject) => {
      const values = this.getFieldsValue(fieldNames);
      validator
        .validate(values, (errors, fields) => {
          if (errors) {
            this.setErrors(errors);
            reject(errors);
          } else {
            this.setErrors([]);
            resolve(values);
          }
        })
    });
  };

  setFieldRule = (fieldName: string, rule: Rule) => {
    this.rules = {
      ...this.rules,
      [fieldName]: rule,
    };
  };

  submit = () => {};

  setFieldsChangeListender = (cb?: FieldsChangeListener) => {
    this.fieldChangeListener = cb;
  };

  triggerFieldsChangeListener = (fieldName: FieldName) => {
    if (this.fieldChangeListener) {
      this.fieldChangeListener(fieldName, this.getFieldsValue());
    }
  };
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
