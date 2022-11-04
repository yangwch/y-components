import { Rule, ValidateError } from 'async-validator';

export type NamePath = string;

export type FieldName = string;
export type FieldValue = any;
export type FormState = Record<FieldName, FieldValue>;

export interface FormInstance<Values = any> {
  getFieldsValue: (paths?: NamePath[]) => Values;
  getFieldValue: (path: NamePath) => FieldValue;
  setFieldValue: (fieldName: FieldName, value: FieldValue) => void;
  setInitialFieldValues: (fieldsValue: Values, reload?: boolean) => void;
  setFieldsValue: (fieldsValue: Values) => void;
  validateFields: (fieldNames: FieldName[]) => Promise<Values>;
  submit: () => void;
  setFieldRule: (fieldName: FieldName, rule: Rule) => void;
  getErrors: () => FormErrors;
  setFieldsChangeListender: (cb?: FieldsChangeListener) => void;
  triggerFieldsChangeListener: (fieldName: FieldName) => void;
}

export type FormLabelAlign = 'left' | 'right' | 'center';

export type FormErrors = Record<string, ValidateError[]>;

export type FieldsChangeListener = (fieldName: string, values: FormState) => void;
