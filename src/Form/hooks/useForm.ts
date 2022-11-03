import { useRef } from 'react';
import { Rule, ValidateError } from 'async-validator';
import useForceUpdate from '../../_utils/useForceUpate';
import { FieldName, FieldValue, FormErrors, FormInstance, FormState, NamePath } from '../interface';
import Schema from 'async-validator';

class FormStore<Values = any> {
  private initialStore: FormState = {};

  private store: FormState = {};

  private forceUpdate: () => void = () => {};

  private rules: Record<string, Rule> = {};

  private errors: FormErrors = {};

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
        .validate(values)
        .then(() => {
          this.setErrors([]);
          resolve(values);
        })
        .catch((reason) => {
          const { errors } = reason;
          this.errors = errors;
          this.setErrors(errors);
          reject(reason);
        });
    });
  };

  setFieldRule = (fieldName: string, rule: Rule) => {
    this.rules = {
      ...this.rules,
      [fieldName]: rule,
    };
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
