---
category: api
type: 数据展示
title: Button
toc: content
---
## Button

按钮的属性说明如下：

| 属性     | 说明                                                                                                                                  | 类型                                                                          | 默认值      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------- |
| danger   | 设置危险按钮                                                                                                                          | boolean                                                                       | false       |
| disabled | 按钮失效状态                                                                                                                          | boolean                                                                       | false       |
| ghost    | 幽灵属性，使按钮背景透明                                                                                                              | boolean                                                                       | false       |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                                                                        | `button`  |
| size     | 设置按钮大小                                                                                                                          | `large` \| `middle` \| `small`                                          | `middle`  |
| type     | 设置按钮类型                                                                                                                          | `primary` \| `ghost` \| `dashed` \| `link` \| `text` \| `default` | `default` |
| onClick  | 点击按钮时的回调                                                                                                                      | (event) => void                                                               | -           |

支持原生 button 的其他所有属性。

## Button.Group

|   属性   | 说明           | 类型                                 | 默认值     |
| :-------: | -------------- | ------------------------------------ | ---------- |
|   size   | 设置按钮大小   | `large` \| `middle` \| `small` | `middle` |
|   style   | 设置 Group样式 | CSSProperties                        | -          |
| className | 设置class样式  | string                               | -          |
