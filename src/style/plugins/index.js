// import { settings } from '../../utils/global';

module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add('getPrefix', () => require('../../settings').prefix);
  },
};
