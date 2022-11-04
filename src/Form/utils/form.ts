import { Rule } from 'async-validator';
// import { settings } from '../../utils/global';
// import identity from '../../_utils/identity';

export const getFieldName = (name?: string) => {
  if (!name) {
    return '';
  }
  return name;
};

export const getFieldRule = (required?: boolean, rule?: Rule): Rule => {
  const rules: Rule = [];
  if (required) {
    rules.push({
      required: true,
    });
  }
  if (rule instanceof Array) {
    rules.push(...rule);
  } else if (rule) {
    rules.push(rule);
  }
  return rules;
};

export const execIsRequired = (required?: boolean, rule?: Rule) => {
  if (required) return true;
  if (rule) {
    if (rule instanceof Array) {
      for (let i = 0; i < rule.length; i++) {
        const r = rule[i];
        if (r.required) {
          return true;
        }
      }
    } else if (rule.required) {
      return true;
    }
  }
  return false;
};
