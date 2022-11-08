import React from 'react';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Tag(props: TagProps) {
  return <div>Tag</div>;
}

export default Tag;
