import classNames from 'classnames';
import React, { CSSProperties } from 'react';

interface ContentProps {
  prefixCls: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
  nodeRef?: React.LegacyRef<HTMLDivElement>;
}
function Content(props: ContentProps) {
  const { prefixCls, children, style, className } = props;
  return (
    <div className={classNames(`${prefixCls}-body`, className)} style={style}>
      {children}
    </div>
  );
}

export default Content;
