// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/yangwenchao1/Projects/myapps/y-components/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/yangwenchao1/Projects/myapps/y-components/node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/buttton",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/src/Buttton/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Buttton/index.md",
          "updatedTime": 1667907600000,
          "componentName": "Buttton",
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/buttton",
            "title": "Buttton"
          },
          "title": "Buttton"
        },
        "title": "Buttton - @yangwch/y-components"
      },
      {
        "path": "/card",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/src/Card/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Card/index.md",
          "updatedTime": 1666348580000,
          "componentName": "Card",
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/card",
            "title": "Card"
          },
          "title": "Card"
        },
        "title": "Card - @yangwch/y-components"
      },
      {
        "path": "/checkbox",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/src/Checkbox/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Checkbox/index.md",
          "updatedTime": 1670466953000,
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/checkbox",
            "title": "Checkbox"
          },
          "title": "Checkbox"
        },
        "title": "Checkbox - @yangwch/y-components"
      },
      {
        "path": "/divider",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/src/Divider/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Divider/index.md",
          "updatedTime": 1666337979000,
          "componentName": "Divider",
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/divider",
            "title": "Divider"
          },
          "title": "Divider"
        },
        "title": "Divider - @yangwch/y-components"
      },
      {
        "path": "/form",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/src/Form/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Form/index.md",
          "updatedTime": 1667558768000,
          "componentName": "Form",
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/form",
            "title": "Form"
          },
          "title": "Form"
        },
        "title": "Form - @yangwch/y-components"
      },
      {
        "path": "/grid",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/src/Grid/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Grid/index.md",
          "updatedTime": 1666267563000,
          "componentName": "Grid",
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/grid",
            "title": "Grid"
          },
          "title": "Grid"
        },
        "title": "Grid - @yangwch/y-components"
      },
      {
        "path": "/input",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/src/Input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Input/index.md",
          "updatedTime": 1668153902000,
          "componentName": "Input",
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/input",
            "title": "Input"
          },
          "title": "Input"
        },
        "title": "Input - @yangwch/y-components"
      },
      {
        "path": "/space",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/src/Space/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Space/index.md",
          "updatedTime": 1668161203000,
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/space",
            "title": "Space"
          },
          "title": "Space"
        },
        "title": "Space - @yangwch/y-components"
      },
      {
        "path": "/tag",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/src/Tag/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Tag/index.md",
          "updatedTime": 1668564646000,
          "componentName": "Tag",
          "slugs": [],
          "hasPreviewer": true,
          "group": {
            "path": "/tag",
            "title": "Tag"
          },
          "title": "Tag"
        },
        "title": "Tag - @yangwch/y-components"
      },
      {
        "path": "/",
        "component": require('/Users/yangwenchao1/Projects/myapps/y-components/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1664271334000,
          "slugs": [
            {
              "depth": 2,
              "value": "Hello y-components!",
              "heading": "hello-y-components"
            }
          ],
          "title": "Hello y-components!"
        },
        "title": "Hello y-components! - @yangwch/y-components"
      }
    ],
    "title": "@yangwch/y-components",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
