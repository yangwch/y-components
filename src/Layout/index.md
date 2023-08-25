---
category: Components
type: 数据展示
title: Layout
toc: content
---

```jsx
import React from 'react';
import { Layout } from '@yangwch/y-components';

const { Header, Content, Sider, Footer } = Layout;

export default () => {
  return (
    <div style={{ height: 300 }}>
      <Layout>
        <Header>this is Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};
```
