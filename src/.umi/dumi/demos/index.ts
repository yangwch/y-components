// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Buttton-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Button, null, "Default"), " \xA0", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      disabled: true
    }, "Disabled")), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "primary"
    }, "Primary"), "\xA0", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "dashed"
    }, "Dashed"), "\xA0", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      danger: true
    }, "Danger")), /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        background: 'rgb(190, 200, 200)',
        padding: '20px'
      }
    }, "\xA0 ", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "ghost"
    }, "Ghost"), " \xA0", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "ghost",
      disabled: true
    }, "Ghost Disabled")), /*#__PURE__*/_react["default"].createElement("p", null));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Button } from '@yangwch/y-components';\n\nexport default () => {\n  return (\n    <div>\n      <p>\n        <Button>Default</Button>  <Button disabled>Disabled</Button>\n      </p>\n      <p>\n        <Button type=\"primary\">Primary</Button> <Button type=\"dashed\">Dashed</Button> \n        <Button danger>Danger</Button>\n      </p>\n\n      <p\n        style={{\n          background: 'rgb(190, 200, 200)',\n          padding: '20px',\n        }}\n      >\n          <Button type=\"ghost\">Ghost</Button>  \n        <Button type=\"ghost\" disabled>\n          Ghost Disabled\n        </Button>\n      </p>\n\n      <p></p>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Buttton","identifier":"Buttton-demo"},
  },
  'Buttton-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _slicedToArray2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    var _React$useState = _react["default"].useState('middle'),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        size = _React$useState2[0],
        setSize = _React$useState2[1];

    var sizes = ['small', 'middle', 'large'];
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, sizes.map(function (s) {
      return /*#__PURE__*/_react["default"].createElement("label", {
        key: s
      }, /*#__PURE__*/_react["default"].createElement("input", {
        onChange: function onChange() {
          return setSize(s);
        },
        type: "radio",
        value: s,
        checked: size === s
      }), " ", s);
    })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      size: size
    }, "Default"), " \xA0", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      size: size,
      disabled: true
    }, "Disabled")), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      size: size,
      type: "primary"
    }, "Primary"), "\xA0", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      size: size,
      type: "dashed"
    }, "Dashed"), "\xA0", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      size: size,
      danger: true
    }, "Danger")), /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        background: 'rgb(190, 200, 200)',
        padding: '20px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      size: size,
      type: "ghost"
    }, "Ghost"), "\xA0", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      size: size,
      type: "ghost",
      disabled: true
    }, "Ghost Disabled")), /*#__PURE__*/_react["default"].createElement("p", null));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Button } from '@yangwch/y-components';\n\nexport default () => {\n  const [size, setSize] = React.useState('middle');\n  const sizes = ['small', 'middle', 'large'];\n  return (\n    <div>\n      <div>\n        {sizes.map((s) => (\n          <label key={s}>\n            <input onChange={() => setSize(s)} type=\"radio\" value={s} checked={size === s} /> {s}\n          </label>\n        ))}\n      </div>\n      <p>\n        <Button size={size}>Default</Button>  \n        <Button size={size} disabled>\n          Disabled\n        </Button>\n      </p>\n      <p>\n        <Button size={size} type=\"primary\">\n          Primary\n        </Button>\n         <Button size={size} type=\"dashed\">\n          Dashed\n        </Button> <Button size={size} danger>\n          Danger\n        </Button>\n      </p>\n\n      <p\n        style={{\n          background: 'rgb(190, 200, 200)',\n          padding: '20px',\n        }}\n      >\n        <Button size={size} type=\"ghost\">\n          Ghost\n        </Button>\n         <Button size={size} type=\"ghost\" disabled>\n          Ghost Disabled\n        </Button>\n      </p>\n\n      <p></p>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Buttton","identifier":"Buttton-demo-1"},
  },
  'Buttton-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Button.Group, null, /*#__PURE__*/_react["default"].createElement(_yComponents.Button, null, "Default"), /*#__PURE__*/_react["default"].createElement(_yComponents.Button, null, "Choice"), /*#__PURE__*/_react["default"].createElement(_yComponents.Button, null, "Default2"), /*#__PURE__*/_react["default"].createElement(_yComponents.Button, null, "Choice2")));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Button } from '@yangwch/y-components';\n\nexport default () => {\n  return (\n    <div>\n      <Button.Group>\n        <Button>Default</Button><Button>Choice</Button>\n        <Button>Default2</Button><Button>Choice2</Button>\n      </Button.Group>\n    </div>\n  )\n}"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Buttton","identifier":"Buttton-demo-2"},
  },
  'Card-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var P = function P(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        padding: 5,
        margin: 0
      }
    }, children);
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, null, "Card Basic Usage & Hoverable"), /*#__PURE__*/_react["default"].createElement(_yComponents.Card, {
      title: "Card Title",
      extra: /*#__PURE__*/_react["default"].createElement("a", {
        href: "#"
      }, "More"),
      hoverable: true,
      style: {
        width: 300
      }
    }, /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content")));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Card, Divider } from '@yangwch/y-components';\n\nconst P = ({ children }) => <p style={{ padding: 5, margin: 0 }}>{children}</p>;\nexport default () => {\n  return (\n    <div>\n      <Divider>Card Basic Usage & Hoverable</Divider>\n      <Card title=\"Card Title\" extra={<a href=\"#\">More</a>} hoverable style={{ width: 300 }}>\n        <P>Card Content</P>\n        <P>Card Content</P>\n        <P>Card Content</P>\n        <P>Card Content</P>\n      </Card>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Card","identifier":"Card-demo"},
  },
  'Card-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _slicedToArray2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var sizes = ['default', 'small'];

  var P = function P(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        padding: 5,
        margin: 0
      }
    }, children);
  };

  var _default = function _default() {
    var _React$useState = _react["default"].useState('small'),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        size = _React$useState2[0],
        setSize = _React$useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, null, "Card Size"), sizes.map(function (s) {
      return /*#__PURE__*/_react["default"].createElement("label", {
        key: s
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "radio",
        checked: size === s,
        onChange: function onChange() {
          return setSize(s);
        }
      }), " ", s);
    }), /*#__PURE__*/_react["default"].createElement(_yComponents.Card, {
      size: size,
      title: "Card Title",
      extra: /*#__PURE__*/_react["default"].createElement("a", {
        href: "#"
      }, "More"),
      hoverable: true,
      style: {
        width: 300
      }
    }, /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content")));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Card, Divider } from '@yangwch/y-components';\n\nconst sizes = ['default', 'small'];\nconst P = ({ children }) => <p style={{ padding: 5, margin: 0 }}>{children}</p>;\nexport default () => {\n  const [size, setSize] = React.useState('small');\n  return (\n    <div>\n      <Divider>Card Size</Divider>\n      {sizes.map((s) => (\n        <label key={s}>\n          <input type=\"radio\" checked={size === s} onChange={() => setSize(s)}/> {s}\n        </label>\n      ))}\n      <Card\n        size={size}\n        title=\"Card Title\"\n        extra={<a href=\"#\">More</a>}\n        hoverable\n        style={{ width: 300 }}\n      >\n        <P>Card Content</P>\n        <P>Card Content</P>\n        <P>Card Content</P>\n        <P>Card Content</P>\n      </Card>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Card","identifier":"Card-demo-1"},
  },
  'Card-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var P = function P(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        padding: 5,
        margin: 0
      }
    }, children);
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, null, "Default"), /*#__PURE__*/_react["default"].createElement(_yComponents.Card, {
      style: {
        width: 300
      }
    }, /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content")), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, null, "Custom Body Style"), /*#__PURE__*/_react["default"].createElement(_yComponents.Card, {
      style: {
        width: 300
      },
      bodyStyle: {
        padding: 5,
        background: '#cccccc2a'
      }
    }, /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content"), /*#__PURE__*/_react["default"].createElement(P, null, "Card Content")));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\n\nimport { Card, Divider } from '@yangwch/y-components';\n\nconst P = ({ children }) => <p style={{ padding: 5, margin: 0 }}>{children}</p>;\nexport default () => {\n  return (\n    <div>\n      <Divider>Default</Divider>\n      <Card style={{ width: 300 }}>\n        <P>Card Content</P>\n        <P>Card Content</P>\n        <P>Card Content</P>\n        <P>Card Content</P>\n      </Card>\n\n      <Divider>Custom Body Style</Divider>\n      <Card style={{ width: 300 }} bodyStyle={{ padding: 5, background: '#cccccc2a' }}>\n        <P>Card Content</P>\n        <P>Card Content</P>\n        <P>Card Content</P>\n        <P>Card Content</P>\n      </Card>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Card","identifier":"Card-demo-2"},
  },
  'Checkbox-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, null), " Checkbox"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { Checkbox } from '@yangwch/y-components';\n\nexport default () => {\n  return (\n    <div>\n      <label>\n        <Checkbox /> Checkbox\n      </label>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"identifier":"Checkbox-demo"},
  },
  'Checkbox-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "UnControlled Radio"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      type: "radio"
    }), " Radio")), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "Controlled Radio"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      type: "radio",
      checked: false
    }), " I can't be checked")));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { Checkbox, Divider } from '@yangwch/y-components';\n\nexport default () => {\n  return (\n    <div>\n      <div>\n        <h3>UnControlled Radio</h3>\n        <label>\n          <Checkbox type=\"radio\" /> Radio\n        </label>\n      </div>\n      <Divider />\n      <div>\n        <h3>Controlled Radio</h3>\n        <label>\n          <Checkbox type=\"radio\" checked={false} /> I can't be checked\n        </label>\n      </div>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"identifier":"Checkbox-demo-1"},
  },
  'Checkbox-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "UnControlled"), /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox.Group, {
      defaultValue: ['1']
    }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "1"
    }), " 1"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "2"
    }), " 2"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "3"
    }), " 3")), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, null), /*#__PURE__*/_react["default"].createElement("h3", null, "Controlled"), /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox.Group, {
      value: ['1', '2']
    }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "1"
    }), " 1"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "2"
    }), " 2"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "3"
    }), " 3")), /*#__PURE__*/_react["default"].createElement("h3", null, "Radio"), /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox.Group, {
      defaultValue: '1',
      type: "radio"
    }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "1"
    }), " 1"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "2"
    }), " 2"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "3"
    }), " 3")), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, null), /*#__PURE__*/_react["default"].createElement("h3", null, "Disabled"), /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox.Group, {
      defaultValue: '2',
      disabled: true
    }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "1"
    }), " 1"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "2"
    }), " 2"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "3"
    }), " 3")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox.Group, {
      defaultValue: '2',
      type: "radio",
      disabled: true
    }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "1"
    }), " 1"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "2"
    }), " 2"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Checkbox, {
      value: "3"
    }), " 3")));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { Checkbox, Divider } from '@yangwch/y-components';\n\nexport default () => {\n  return (\n    <div>\n      <h3>UnControlled</h3>\n      <Checkbox.Group defaultValue={['1']}>\n        <label><Checkbox value=\"1\"/> 1</label>\n        <label><Checkbox value=\"2\"/> 2</label>\n        <label><Checkbox value=\"3\"/> 3</label>\n      </Checkbox.Group>\n      <Divider/>\n      <h3>Controlled</h3>\n      <Checkbox.Group value={['1', '2']}>\n        <label><Checkbox value=\"1\"/> 1</label>\n        <label><Checkbox value=\"2\"/> 2</label>\n        <label><Checkbox value=\"3\"/> 3</label>\n      </Checkbox.Group>\n\n      <h3>Radio</h3>\n      <Checkbox.Group defaultValue={'1'} type=\"radio\">\n        <label><Checkbox value=\"1\"/> 1</label>\n        <label><Checkbox value=\"2\"/> 2</label>\n        <label><Checkbox value=\"3\"/> 3</label>\n      </Checkbox.Group>\n      <Divider />\n      <h3>Disabled</h3>\n      <Checkbox.Group defaultValue={'2'} disabled>\n        <label><Checkbox value=\"1\"/> 1</label>\n        <label><Checkbox value=\"2\"/> 2</label>\n        <label><Checkbox value=\"3\"/> 3</label>\n      </Checkbox.Group>\n      <br/>\n      <Checkbox.Group defaultValue={'2'} type=\"radio\" disabled>\n        <label><Checkbox value=\"1\"/> 1</label>\n        <label><Checkbox value=\"2\"/> 2</label>\n        <label><Checkbox value=\"3\"/> 3</label>\n      </Checkbox.Group>\n    </div>\n  )\n}"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"identifier":"Checkbox-demo-2"},
  },
  'Divider-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var Paragraph = function Paragraph(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        margin: 0,
        padding: 0
      }
    }, children);
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, null), /*#__PURE__*/_react["default"].createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Divider } from '@yangwch/y-components';\n\nconst Paragraph = ({ children }) => <p style={{ margin: 0, padding: 0 }}>{children}</p>;\n\nexport default () => {\n  return (\n    <div>\n      <Paragraph>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi\n        ista probare, quae sunt a te dicta? Refert tamen, quo modo.\n      </Paragraph>\n      <Divider />\n      <Paragraph>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi\n        ista probare, quae sunt a te dicta? Refert tamen, quo modo.\n      </Paragraph>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Divider","identifier":"Divider-demo"},
  },
  'Divider-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var Paragraph = function Paragraph(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        margin: 0,
        padding: 0
      }
    }, children);
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, null, "Text Left"), /*#__PURE__*/_react["default"].createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, {
      align: "center"
    }, "Text Center"), /*#__PURE__*/_react["default"].createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, {
      align: "right"
    }, "Text Right"), /*#__PURE__*/_react["default"].createElement(Paragraph, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Divider } from '@yangwch/y-components';\n\nconst Paragraph = ({ children }) => <p style={{ margin: 0, padding: 0 }}>{children}</p>;\n\nexport default () => {\n  return (\n    <div>\n      <Paragraph>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi\n        ista probare, quae sunt a te dicta? Refert tamen, quo modo.\n      </Paragraph>\n      <Divider>Text Left</Divider>\n      <Paragraph>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi\n        ista probare, quae sunt a te dicta? Refert tamen, quo modo.\n      </Paragraph>\n      <Divider align=\"center\">Text Center</Divider>\n      <Paragraph>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi\n        ista probare, quae sunt a te dicta? Refert tamen, quo modo.\n      </Paragraph>\n      <Divider align=\"right\">Text Right</Divider>\n      <Paragraph>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi\n        ista probare, quae sunt a te dicta? Refert tamen, quo modo.\n      </Paragraph>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Divider","identifier":"Divider-demo-1"},
  },
  'Divider-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, " Vertical & Custom Style"), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '22px'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Left"), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, {
      type: "vertical",
      style: {
        height: 25
      }
    }), /*#__PURE__*/_react["default"].createElement("span", null, " Center"), /*#__PURE__*/_react["default"].createElement(_yComponents.Divider, {
      type: "vertical",
      style: {
        borderColor: 'red',
        margin: '0 30px'
      }
    }), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: 'red'
      }
    }, "Right")));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Divider, Button } from '@yangwch/y-components';\n\nexport default () => {\n  return (\n    <div>\n      <div> Vertical & Custom Style</div>\n      <div style={{ fontSize: '22px' }}>\n        <span>Left</span>\n        <Divider type=\"vertical\" style={{ height: 25 }} />\n        <span> Center</span>\n        <Divider type=\"vertical\" style={{ borderColor: 'red', margin: '0 30px' }} />\n        <span style={{ color: 'red' }}>Right</span>\n      </div>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Divider","identifier":"Divider-demo-2"},
  },
  'Form-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _slicedToArray2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

  var _extends2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js"));

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var Input = function Input(props) {
    var onValueChange = function onValueChange(e) {
      var v = e.target.value;

      if (props.onChange) {
        props.onChange(props.type === 'number' ? Number(v) : v);
      }
    };

    return /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, props, {
      onChange: onValueChange
    }));
  };

  var _default = function _default() {
    var _React$useState = _react["default"].useState(),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        values = _React$useState2[0],
        setValues = _React$useState2[1];

    var form = _yComponents.Form.useForm();

    var onSubmit = function onSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
      form.validateFields().then(function (values) {
        setValues(values);
      })["catch"](function (_ref) {// setValues()

        var errors = _ref.errors;
      });
    };

    var onFieldsChange = function onFieldsChange(fieldName, values) {
      console.log('onFieldsChange', fieldName, values);
    };

    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Form, {
      form: form,
      labelCol: {
        span: 2
      },
      wrapperCol: {
        span: 10
      },
      onSubmit: onSubmit,
      initialValues: {
        name: '小明',
        age: 10
      },
      onFieldsChange: onFieldsChange
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Form.Item, {
      label: "\u59D3\u540D",
      name: "name",
      rule: {
        required: true,
        type: 'string',
        message: '姓名是必填项，且长度为2-5',
        min: 2,
        max: 5
      }
    }, /*#__PURE__*/_react["default"].createElement(Input, {
      type: "text"
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Form.Item, {
      label: "\u5E74\u9F84",
      name: "age",
      rule: {
        type: 'number',
        message: '请输入合法的年龄',
        min: 0
      }
    }, /*#__PURE__*/_react["default"].createElement(Input, {
      type: "number"
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Form.Item, null, /*#__PURE__*/_react["default"].createElement("button", {
      type: "submit"
    }, "\u63D0\u4EA4"))), /*#__PURE__*/_react["default"].createElement("div", null, "\u7ED3\u679C\uFF1A", /*#__PURE__*/_react["default"].createElement("br", null), "\xA0\xA0\u59D3\u540D\uFF1A", values === null || values === void 0 ? void 0 : values.name, /*#__PURE__*/_react["default"].createElement("br", null), "\xA0\xA0\u5E74\u9F84\uFF1A", values === null || values === void 0 ? void 0 : values.age));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Form } from '@yangwch/y-components';\n\nconst Input = (props) => {\n  const onValueChange = (e) => {\n    const v = e.target.value;\n    if (props.onChange) {\n      props.onChange(props.type === 'number' ? Number(v) : v);\n    }\n  };\n  return <input {...props} onChange={onValueChange} />;\n};\n\nexport default () => {\n  const [values, setValues] = React.useState();\n  const form = Form.useForm();\n  const onSubmit = (e) => {\n    e.preventDefault();\n    e.stopPropagation();\n    form\n      .validateFields()\n      .then((values) => {\n        setValues(values);\n      })\n      .catch(({ errors }) => {\n        // setValues()\n      });\n  };\n\n  const onFieldsChange = (fieldName, values) => {\n    console.log('onFieldsChange', fieldName, values);\n  };\n  return (\n    <div>\n      <Form\n        form={form}\n        labelCol={{ span: 2 }}\n        wrapperCol={{ span: 10 }}\n        onSubmit={onSubmit}\n        initialValues={{\n          name: '小明',\n          age: 10,\n        }}\n        onFieldsChange={onFieldsChange}\n      >\n        <Form.Item\n          label=\"姓名\"\n          name=\"name\"\n          rule={{\n            required: true,\n            type: 'string',\n            message: '姓名是必填项，且长度为2-5',\n            min: 2,\n            max: 5,\n          }}\n        >\n          <Input type=\"text\" />\n        </Form.Item>\n        <Form.Item\n          label=\"年龄\"\n          name=\"age\"\n          rule={{ type: 'number', message: '请输入合法的年龄', min: 0 }}\n        >\n          <Input type=\"number\" />\n        </Form.Item>\n        <Form.Item>\n          <button type=\"submit\">提交</button>\n        </Form.Item>\n      </Form>\n\n      <div>\n        结果：\n        <br />\n        &nbsp;&nbsp;姓名：{values?.name}\n        <br />\n        &nbsp;&nbsp;年龄：{values?.age}\n      </div>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Form","identifier":"Form-demo"},
  },
  'Form-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _slicedToArray2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

  var _extends2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js"));

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var Input = function Input(props) {
    var onValueChange = function onValueChange(e) {
      var v = e.target.value;

      if (props.onChange) {
        props.onChange(props.type === 'number' ? Number(v) : v);
      }
    };

    return /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, props, {
      onChange: onValueChange
    }));
  };

  var _default = function _default() {
    var _React$useState = _react["default"].useState(),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        values = _React$useState2[0],
        setValues = _React$useState2[1];

    var onSubmit = function onSubmit(e, values, form) {
      e.stopPropagation();
      e.preventDefault();
      form.validateFields().then(function () {
        setValues(values);
      });
    };

    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Form, {
      inline: true,
      onSubmit: onSubmit,
      initialValues: {
        name: '',
        age: 0
      }
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Form.Item, {
      label: "\u59D3\u540D",
      name: "name",
      rule: {
        required: true,
        type: 'string',
        message: '姓名是必填项，且长度为2-5',
        min: 2,
        max: 5
      }
    }, /*#__PURE__*/_react["default"].createElement(Input, {
      type: "text"
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Form.Item, {
      label: "\u5E74\u9F84",
      name: "age",
      rule: {
        type: 'number',
        message: '请输入合法的年龄',
        min: 0
      }
    }, /*#__PURE__*/_react["default"].createElement(Input, {
      type: "number"
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Form.Item, null, /*#__PURE__*/_react["default"].createElement("button", {
      type: "submit"
    }, "\u63D0\u4EA4"))), /*#__PURE__*/_react["default"].createElement("pre", null, "\u7ED3\u679C\uFF1A", /*#__PURE__*/_react["default"].createElement("br", null), "\xA0\xA0\u59D3\u540D\uFF1A", values === null || values === void 0 ? void 0 : values.name, /*#__PURE__*/_react["default"].createElement("br", null), "\xA0\xA0\u5E74\u9F84\uFF1A", values === null || values === void 0 ? void 0 : values.age));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Form } from '@yangwch/y-components';\n\nconst Input = (props) => {\n  const onValueChange = (e) => {\n    const v = e.target.value;\n    if (props.onChange) {\n      props.onChange(props.type === 'number' ? Number(v) : v);\n    }\n  };\n  return <input {...props} onChange={onValueChange} />;\n};\n\nexport default () => {\n  const [values, setValues] = React.useState();\n  const onSubmit = (e, values, form) => {\n    e.stopPropagation();\n    e.preventDefault();\n    form.validateFields().then(() => {\n      setValues(values);\n    })\n  };\n  return (\n    <div>\n      <Form\n        inline\n        onSubmit={onSubmit}\n        initialValues={{\n          name: '',\n          age: 0,\n        }}\n      >\n        <Form.Item\n          label=\"姓名\"\n          name=\"name\"\n          rule={{\n            required: true,\n            type: 'string',\n            message: '姓名是必填项，且长度为2-5',\n            min: 2,\n            max: 5,\n          }}\n        >\n          <Input type=\"text\" />\n        </Form.Item>\n        <Form.Item\n          label=\"年龄\"\n          name=\"age\"\n          rule={{ type: 'number', message: '请输入合法的年龄', min: 0 }}\n        >\n          <Input type=\"number\" />\n        </Form.Item>\n        <Form.Item>\n          <button type=\"submit\">提交</button>\n        </Form.Item>\n      </Form>\n\n      <pre>\n        结果：\n        <br />\n        &nbsp;&nbsp;姓名：{values?.name}\n        <br />\n        &nbsp;&nbsp;年龄：{values?.age}\n      </pre>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Form","identifier":"Form-demo-1"},
  },
  'Grid-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var colStyle = {
    border: '1px solid blue',
    padding: '5px 0',
    background: 'rgb(119 145 240)'
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Row, null, /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 10
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: colStyle
    }, "Col 10")), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 8
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: colStyle
    }, "Col 8")), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: colStyle
    }, "Col 6"))), /*#__PURE__*/_react["default"].createElement(_yComponents.Row, null, /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 10
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: colStyle
    }, "Col 10")), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 10,
      offset: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: colStyle
    }, "Col 10 Offset: 4"))));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Row, Col } from '@yangwch/y-components';\n\nconst colStyle = {\n  border: '1px solid blue',\n  padding: '5px 0',\n  background: 'rgb(119 145 240)'\n};\nexport default () => {\n  return (\n    <div>\n      <Row>\n        <Col span={10}>\n          <div style={colStyle}>Col 10</div>\n        </Col>\n        <Col span={8}>\n          <div style={colStyle}>Col 8</div>\n        </Col>\n\n        <Col span={6}>\n          <div style={colStyle}>Col 6</div>\n        </Col>\n      </Row>\n      <Row>\n        <Col span={10}>\n          <div style={colStyle}>Col 10</div>\n        </Col>\n        <Col span={10} offset={4}>\n          <div style={colStyle}>Col 10 Offset: 4</div>\n        </Col>\n      </Row>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Grid","identifier":"Grid-demo"},
  },
  'Grid-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var colStyle = {
    border: '1px solid blue',
    padding: '5px 0',
    background: 'rgb(119 145 240)'
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Row, null, /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      sm: 24,
      xl: 12
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: colStyle
    }, "col xl: 12 sm: 24")), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      sm: 24,
      xl: 12
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: colStyle
    }, "col xl: 12 sm: 24"))));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Row, Col } from '@yangwch/y-components';\n\nconst colStyle = {\n  border: '1px solid blue',\n  padding: '5px 0',\n  background: 'rgb(119 145 240)'\n};\nexport default () => {\n  return (\n    <div>\n      <Row>\n        <Col sm={24} xl={12}>\n          <div style={colStyle}>col xl: 12 sm: 24</div>\n        </Col>\n\n        <Col sm={24} xl={12}>\n          <div style={colStyle}>col xl: 12 sm: 24</div>\n        </Col>\n      </Row>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Grid","identifier":"Grid-demo-1"},
  },
  'Grid-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _objectSpread2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var colStyle = {
    border: '1px solid blue',
    padding: '5px 0',
    background: 'rgb(119 145 240)'
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, "-- Align Top -- Justify Center --", /*#__PURE__*/_react["default"].createElement(_yComponents.Row, {
      align: "top",
      justify: "center"
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, colStyle), {}, {
        height: 50
      })
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, colStyle), {}, {
        height: 100
      })
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, colStyle), {}, {
        height: 50
      })
    }))), "-- Align Middle -- Justify space-around --", /*#__PURE__*/_react["default"].createElement(_yComponents.Row, {
      align: "middle",
      justify: "space-around"
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, colStyle), {}, {
        height: 50
      })
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, colStyle), {}, {
        height: 100
      })
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, colStyle), {}, {
        height: 50
      })
    }))), "-- Align Bottom -- Justify space-between --", /*#__PURE__*/_react["default"].createElement(_yComponents.Row, {
      align: "bottom",
      justify: "space-between"
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, colStyle), {}, {
        height: 50
      })
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, colStyle), {}, {
        height: 100
      })
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 4
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, colStyle), {}, {
        height: 50
      })
    }))));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Row, Col } from '@yangwch/y-components';\n\nconst colStyle = {\n  border: '1px solid blue',\n  padding: '5px 0',\n  background: 'rgb(119 145 240)'\n};\nexport default () => {\n  return (\n    <div>\n      -- Align Top -- Justify Center --\n      <Row align=\"top\" justify=\"center\">\n        <Col span={4}>\n          <div style={{ ...colStyle, height: 50 }}></div>\n        </Col>\n\n        <Col span={4}>\n          <div style={{ ...colStyle, height: 100 }}></div>\n        </Col>\n\n        <Col span={4}>\n          <div style={{ ...colStyle, height: 50 }}></div>\n        </Col>\n      </Row>\n      -- Align Middle -- Justify space-around --\n      <Row align=\"middle\" justify=\"space-around\">\n        <Col span={4}>\n          <div style={{ ...colStyle, height: 50 }}></div>\n        </Col>\n\n        <Col span={4}>\n          <div style={{ ...colStyle, height: 100 }}></div>\n        </Col>\n\n        <Col span={4}>\n          <div style={{ ...colStyle, height: 50 }}></div>\n        </Col>\n      </Row>\n      -- Align Bottom -- Justify space-between --\n      <Row align=\"bottom\" justify=\"space-between\">\n        <Col span={4}>\n          <div style={{ ...colStyle, height: 50 }}></div>\n        </Col>\n\n        <Col span={4}>\n          <div style={{ ...colStyle, height: 100 }}></div>\n        </Col>\n\n        <Col span={4}>\n          <div style={{ ...colStyle, height: 50 }}></div>\n        </Col>\n      </Row>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Grid","identifier":"Grid-demo-2"},
  },
  'Grid-demo-3': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var colStyle = {
    background: 'rgb(119 145 240)',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  };

  var ColumnContent = function ColumnContent() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: colStyle
    }, "Column");
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, "Gutter", /*#__PURE__*/_react["default"].createElement(_yComponents.Row, {
      gutter: [16, 24]
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null))), "Another Row", /*#__PURE__*/_react["default"].createElement(_yComponents.Row, {
      gutter: [16, 24]
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null)), /*#__PURE__*/_react["default"].createElement(_yComponents.Col, {
      span: 6
    }, /*#__PURE__*/_react["default"].createElement(ColumnContent, null))));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Row, Col } from '@yangwch/y-components';\n\nconst colStyle = {\n  background: 'rgb(119 145 240)',\n  height: 50,\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center',\n  color: '#fff'\n};\n\nconst ColumnContent = () => (<div style={colStyle}>Column</div>)\n\nexport default () => {\n  return (\n    <div>\n      Gutter\n      <Row gutter={[16, 24]}>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n      </Row>\n      Another Row\n      <Row gutter={[16, 24]}>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n        <Col span={6}><ColumnContent /></Col>\n      </Row>\n    </div>\n  )\n}"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Grid","identifier":"Grid-demo-3"},
  },
  'Input-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Input, {
      placeholder: "\u8BF7\u8F93\u5165\u6587\u5B57"
    })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Input, {
      placeholder: "disabled",
      disabled: true
    })));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { Input } from '@yangwch/y-components';\n\nexport default () => {\n  return (\n    <div>\n      <p>\n        <Input placeholder=\"请输入文字\" />\n      </p>\n      <p>\n        <Input placeholder=\"disabled\" disabled />\n      </p>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Input","identifier":"Input-demo"},
  },
  'Input-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _slicedToArray2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var sizeList = ['small', 'middle', 'large'];

  var _default = function _default() {
    var _React$useState = _react["default"].useState('middle'),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        size = _React$useState2[0],
        setSize = _React$useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, sizeList.map(function (s) {
      return /*#__PURE__*/_react["default"].createElement("label", {
        key: s
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "radio",
        checked: size === s,
        onChange: function onChange(e) {
          return setSize(s);
        }
      }), s);
    })), /*#__PURE__*/_react["default"].createElement(_yComponents.Input, {
      size: size,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u5B57"
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { Input } from '@yangwch/y-components';\n\nconst sizeList = ['small', 'middle', 'large'];\n\nexport default () => {\n  const [size, setSize] = React.useState('middle');\n\n  return (\n    <div>\n      <div>\n        {sizeList.map((s) => (\n          <label key={s}>\n            <input type=\"radio\" checked={size === s} onChange={(e) => setSize(s)} />\n            {s}\n          </label>\n        ))}\n      </div>\n      <Input size={size} placeholder=\"请输入文字\" />\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Input","identifier":"Input-demo-1"},
  },
  'Space-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var Block = function Block() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        background: '#ccc',
        width: 60,
        height: 50,
        lineHeight: 3,
        textAlign: 'center'
      }
    }, "Block");
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Space, null, /*#__PURE__*/_react["default"].createElement(_yComponents.Card, null, /*#__PURE__*/_react["default"].createElement(_yComponents.Space, null, "Space", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "primary"
    }, "Primary"), /*#__PURE__*/_react["default"].createElement(Block, null))), /*#__PURE__*/_react["default"].createElement(_yComponents.Card, null, /*#__PURE__*/_react["default"].createElement(_yComponents.Space, {
      align: "start"
    }, "Align: start", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "primary"
    }, "Primary"), /*#__PURE__*/_react["default"].createElement(Block, null))), /*#__PURE__*/_react["default"].createElement(_yComponents.Card, null, /*#__PURE__*/_react["default"].createElement(_yComponents.Space, {
      align: "end"
    }, "Align: end", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "primary"
    }, "Primary"), /*#__PURE__*/_react["default"].createElement(Block, null))), /*#__PURE__*/_react["default"].createElement(_yComponents.Card, null, /*#__PURE__*/_react["default"].createElement(_yComponents.Space, {
      align: "baseline"
    }, "Align: baseline", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "primary"
    }, "Primary"), /*#__PURE__*/_react["default"].createElement(Block, null)))));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Space, Button, Card } from '@yangwch/y-components';\n\nconst Block = () => {\n  return (\n    <div style={{ background: '#ccc', width: 60, height: 50, lineHeight: 3, textAlign: 'center' }}>\n      Block\n    </div>\n  );\n};\n\nexport default () => {\n  return (\n    <div>\n      <Space>\n        <Card>\n          <Space>\n            Space\n            <Button type=\"primary\">Primary</Button>\n            <Block />\n          </Space>\n        </Card>\n        <Card>\n          <Space align=\"start\">\n            Align: start\n            <Button type=\"primary\">Primary</Button>\n            <Block />\n          </Space>\n        </Card>\n        <Card>\n          <Space align=\"end\">\n            Align: end\n            <Button type=\"primary\">Primary</Button>\n            <Block />\n          </Space>\n        </Card>\n        <Card>\n          <Space align=\"baseline\">\n            Align: baseline\n            <Button type=\"primary\">Primary</Button>\n            <Block />\n          </Space>\n        </Card>\n      </Space>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"identifier":"Space-demo"},
  },
  'Space-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var Block = function Block() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        background: '#ccc',
        width: 60,
        height: 50,
        lineHeight: 3,
        textAlign: 'center'
      }
    }, "Block");
  };

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_yComponents.Card, {
      style: {
        width: 300
      }
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Space, {
      wrap: true,
      size: [30, 10]
    }, "Space", /*#__PURE__*/_react["default"].createElement(_yComponents.Button, null, "Button"), /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "primary"
    }, "Primary"), /*#__PURE__*/_react["default"].createElement(Block, null)));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Space, Button, Card } from '@yangwch/y-components';\n\nconst Block = () => {\n  return (\n    <div style={{ background: '#ccc', width: 60, height: 50, lineHeight: 3, textAlign: 'center' }}>\n      Block\n    </div>\n  );\n};\nexport default () => {\n  return (\n    <Card style={{ width: 300 }}>\n      <Space wrap size={[30, 10]}>\n        Space\n        <Button>Button</Button>\n        <Button type=\"primary\">Primary</Button>\n        <Block />\n      </Space>\n    </Card>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"identifier":"Space-demo-1"},
  },
  'Space-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _slicedToArray2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    var _React$useState = _react["default"].useState('vertical'),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        direction = _React$useState2[0],
        setDirection = _React$useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
      type: "radio",
      checked: direction === 'vertical',
      onChange: function onChange() {
        return setDirection('vertical');
      }
    }), " vertical"), /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
      type: "radio",
      checked: direction === 'horizontal',
      onChange: function onChange() {
        return setDirection('horizontal');
      }
    }), " horizontal"), /*#__PURE__*/_react["default"].createElement(_yComponents.Card, {
      style: {
        width: 300
      }
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Space, {
      direction: direction
    }, /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "dashed"
    }, "Button"), /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "dashed"
    }, "Button"), /*#__PURE__*/_react["default"].createElement(_yComponents.Button, {
      type: "dashed"
    }, "Button"))));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\n\nimport { Space, Button, Card } from '@yangwch/y-components';\n\nexport default () => {\n  const [direction, setDirection] = React.useState('vertical');\n  return (\n    <div>\n      <label>\n        <input type=\"radio\" checked={direction === 'vertical'} onChange={() => setDirection('vertical')} /> vertical\n      </label>\n\n      <label>\n        <input type=\"radio\" checked={direction === 'horizontal'} onChange={() => setDirection('horizontal')} /> horizontal\n      </label>\n      <Card style={{ width: 300 }}>\n        <Space direction={direction}>\n          <Button type=\"dashed\">Button</Button>\n          <Button type=\"dashed\">Button</Button>\n          <Button type=\"dashed\">Button</Button>\n        </Space>\n      </Card>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"identifier":"Space-demo-2"},
  },
  'Tag-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Tag, null, "tag 1"), /*#__PURE__*/_react["default"].createElement(_yComponents.Tag, {
      closable: true
    }, "tag 2"), /*#__PURE__*/_react["default"].createElement(_yComponents.Tag, {
      closable: true
    }, "tag 3"), /*#__PURE__*/_react["default"].createElement(_yComponents.Tag, {
      closable: true
    }, "tag 4"), /*#__PURE__*/_react["default"].createElement(_yComponents.Tag, {
      closable: true,
      color: "none",
      onClose: function onClose(e) {
        return e.preventDefault();
      }
    }, "preventDefault 5"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { Tag } from '@yangwch/y-components';\n\nexport default () => {\n  return (\n    <div>\n      <Tag>tag 1</Tag>\n      <Tag closable>tag 2</Tag>\n      <Tag closable>tag 3</Tag>\n      <Tag closable>tag 4</Tag>\n      <Tag closable color=\"none\" onClose={(e) => e.preventDefault()}>\n        preventDefault 5\n      </Tag>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Tag","identifier":"Tag-demo"},
  },
  'Tag-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_yComponents.Tag, {
      color: "red"
    }, "red"), /*#__PURE__*/_react["default"].createElement(_yComponents.Tag, {
      color: "green"
    }, "green"), /*#__PURE__*/_react["default"].createElement(_yComponents.Tag, {
      closable: true,
      color: "yellow",
      style: {
        color: 'black'
      },
      closeIcon: "\uD83D\uDEAB"
    }, "CUSTOM\uFF1A color & icon"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { Tag } from '@yangwch/y-components';\n\nexport default () => {\n  return (\n    <div>\n      <Tag color=\"red\">red</Tag>\n      <Tag color=\"green\">green</Tag>\n      <Tag closable color=\"yellow\" style={{ color: 'black' }} closeIcon=\"🚫\">\n        CUSTOM： color & icon\n      </Tag>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Tag","identifier":"Tag-demo-1"},
  },
  'Tag-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _slicedToArray2 = _interopRequireDefault(require("/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

  var _react = _interopRequireDefault(require("react"));

  var _yComponents = require("@yangwch/y-components");

  var _default = function _default() {
    var _React$useState = _react["default"].useState(''),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        input = _React$useState2[0],
        setInput = _React$useState2[1];

    var _React$useState3 = _react["default"].useState(['Tag 1', 'Tag2', 'Tag 3']),
        _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
        tags = _React$useState4[0],
        setTags = _React$useState4[1];

    var onInputPress = function onInputPress(e) {
      if (e.key === 'Enter') {
        console.log('enter', input);

        _react["default"].startTransition(function () {
          setTags(function (prevTags) {
            return prevTags.concat(input);
          });
          setInput('');
        });
      }
    };

    var onCloseTag = function onCloseTag(e, index) {
      e.preventDefault();
      setTags(function (prevTags) {
        var nTags = Array.from(prevTags);
        nTags.splice(index, 1);
        return nTags;
      });
    };

    return /*#__PURE__*/_react["default"].createElement("div", null, tags.map(function (tag, i) {
      return /*#__PURE__*/_react["default"].createElement(_yComponents.Tag, {
        closable: true,
        key: i,
        onClose: function onClose(e) {
          return onCloseTag(e, i);
        }
      }, tag);
    }), /*#__PURE__*/_react["default"].createElement(_yComponents.Input, {
      value: input,
      onChange: function onChange(e) {
        return setInput(e.target.value);
      },
      size: "small",
      style: {
        width: 100,
        borderStyle: 'dashed'
      },
      placeholder: "+ New Tag",
      onKeyPress: onInputPress
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"jsx":"import React from 'react';\nimport { Tag, Input } from '@yangwch/y-components';\nexport default () => {\n  const [input, setInput] = React.useState('');\n  const [tags, setTags] = React.useState(['Tag 1', 'Tag2', 'Tag 3']);\n  const onInputPress = (e) => {\n    if (e.key === 'Enter') {\n      console.log('enter', input);\n      React.startTransition(() => {\n        setTags((prevTags) => prevTags.concat(input));\n        setInput('');\n      });\n    }\n  };\n\n  const onCloseTag = (e, index) => {\n    e.preventDefault();\n    setTags((prevTags) => {\n      const nTags = Array.from(prevTags);\n      nTags.splice(index, 1);\n      return nTags;\n    });\n  };\n  return (\n    <div>\n      {tags.map((tag, i) => (\n        <Tag closable key={i} onClose={(e) => onCloseTag(e, i)}>\n          {tag}\n        </Tag>\n      ))}\n      <Input\n        value={input}\n        onChange={(e) => setInput(e.target.value)}\n        size=\"small\"\n        style={{ width: 100, borderStyle: 'dashed' }}\n        placeholder=\"+ New Tag\"\n        onKeyPress={onInputPress}\n      />\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@yangwch/y-components":{"version":"0.1.0"}},"componentName":"Tag","identifier":"Tag-demo-2"},
  },
};
