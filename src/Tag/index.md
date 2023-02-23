---
category: Components
type: 数据展示
title: Tag
toc: content
---

## Usage

```jsx
import React from 'react';
import { Tag } from '@yangwch/y-components';

export default () => {
  return (
    <div>
      <Tag>tag 1</Tag>
      <Tag closable>tag 2</Tag>
      <Tag closable>tag 3</Tag>
      <Tag closable>tag 4</Tag>
      <Tag closable color="none" onClose={(e) => e.preventDefault()}>
        preventDefault 5
      </Tag>
    </div>
  );
};
```

## Customize

```jsx
import React from 'react';
import { Tag } from '@yangwch/y-components';

export default () => {
  return (
    <div>
      <Tag color="red">red</Tag>
      <Tag color="green">green</Tag>
      <Tag closable color="yellow" style={{ color: 'black' }} closeIcon="🚫">
        CUSTOM： color & icon
      </Tag>
    </div>
  );
};
```

## Tag List

```jsx
import React from 'react';
import { Tag, Input } from '@yangwch/y-components';
export default () => {
  const [input, setInput] = React.useState('');
  const [tags, setTags] = React.useState(['Tag 1', 'Tag2', 'Tag 3']);
  const onInputPress = (e) => {
    if (e.key === 'Enter') {
      console.log('enter', input);
      React.startTransition(() => {
        setTags((prevTags) => prevTags.concat(input));
        setInput('');
      });
    }
  };

  const onCloseTag = (e, index) => {
    e.preventDefault();
    setTags((prevTags) => {
      const nTags = Array.from(prevTags);
      nTags.splice(index, 1);
      return nTags;
    });
  };
  return (
    <div>
      {tags.map((tag, i) => (
        <Tag closable key={i} onClose={(e) => onCloseTag(e, i)}>
          {tag}
        </Tag>
      ))}
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        size="small"
        style={{ width: 100, borderStyle: 'dashed' }}
        placeholder="+ New Tag"
        onKeyPress={onInputPress}
      />
    </div>
  );
};
```

## API

<API id="Tag"></API>
