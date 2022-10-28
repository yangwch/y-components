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
}


type ValidateMessage = string | (() => string);
export interface ValidateMessages {
  default?: ValidateMessage;
  required?: ValidateMessage;
  enum?: ValidateMessage;
  whitespace?: ValidateMessage;
  date?: {
    format?: ValidateMessage;
    parse?: ValidateMessage;
    invalid?: ValidateMessage;
  };
  types?: {
    string?: ValidateMessage;
    method?: ValidateMessage;
    array?: ValidateMessage;
    object?: ValidateMessage;
    number?: ValidateMessage;
    date?: ValidateMessage;
    boolean?: ValidateMessage;
    integer?: ValidateMessage;
    float?: ValidateMessage;
    regexp?: ValidateMessage;
    email?: ValidateMessage;
    url?: ValidateMessage;
    hex?: ValidateMessage;
  };
  string?: {
    len?: ValidateMessage;
    min?: ValidateMessage;
    max?: ValidateMessage;
    range?: ValidateMessage;
  };
  number?: {
    len?: ValidateMessage;
    min?: ValidateMessage;
    max?: ValidateMessage;
    range?: ValidateMessage;
  };
  array?: {
    len?: ValidateMessage;
    min?: ValidateMessage;
    max?: ValidateMessage;
    range?: ValidateMessage;
  };
  pattern?: {
    mismatch?: ValidateMessage;
  };
}

export type FormLabelAlign = 'left' | 'right' | 'center'