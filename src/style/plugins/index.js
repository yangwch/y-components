const getPrefix = () => require('../../../settings.json').prefix;
module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add('getPrefix', getPrefix);
  },
};
