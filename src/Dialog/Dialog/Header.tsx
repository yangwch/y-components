import React from 'react';
interface HeaderProps {
  prefixCls: string;
  children?: React.ReactNode;
}

function Header(props: HeaderProps) {
  const { prefixCls, children } = props;
  const headerCls = `${prefixCls}-header`;
  const titleCls = `${prefixCls}-title`;
  return (
    <div className={headerCls}>
      <div className={titleCls}>{children}</div>
    </div>
  );
}

export default Header;
