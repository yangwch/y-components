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
const headerStyle = {
  textAlign: 'center',
  paddingInline: 50,
  lineHeight: '50px',
  height: 50,
  backgroundColor: 'rgb(234,245,255)',
};
const siderStyle = {
  width: 100,
};

const contentStyle = {
  padding: 10,
};

export default () => {
  return (
    <div style={{ background: 'rgb(234,245,255)' }}>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider style={siderStyle}>Sider</Sider>
          <Content style={contentStyle}>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};
```
