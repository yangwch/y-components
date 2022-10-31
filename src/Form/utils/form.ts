import { settings } from '../../utils/global';
import identity from '../../_utils/identity';

export const getFieldName = (name?: string) => {
  if (!name) {
    return `${settings.prefix}${identity.create()}`;
  }
  return name;
};
