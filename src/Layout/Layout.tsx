import classNames from 'classnames';
import React, { HTMLAttributes, useState } from 'react';
import { layoutCls } from './constant';
import LayoutContext from './LayoutContext';
import './style/index.less';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  hasSider?: boolean;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { className, hasSider, ...attrs } = props;
  const [siders, setSiders] = useState<any[]>([]);
  const clsNames = classNames(
    `${layoutCls}`,
    {
      [`${layoutCls}-has-sider`]: typeof hasSider === 'boolean' ? hasSider : siders.length > 0,
    },
    className,
  );
  const contextValue = React.useMemo(
    () => ({
      addSider: (id: any) => {
        setSiders((prev) => [...prev, id]);
      },
      removeSider: (id: any) => {
        setSiders((prev) => prev.filter((currentId) => currentId !== id));
      },
    }),
    [],
  );
  return (
    <LayoutContext.Provider value={contextValue}>
      <div ref={ref} className={clsNames} {...attrs} />
    </LayoutContext.Provider>
  );
});

interface BasicPropsWithTagName extends HTMLAttributes<HTMLDivElement> {
  suffixCls: string;
  tagName: 'header' | 'footer' | 'main' | 'section';
}

const Basic = React.forwardRef<HTMLElement, BasicPropsWithTagName>((props, ref) => {
  const { suffixCls, tagName: TagName, className, ...others } = props;

  const clsNames = classNames(`${layoutCls}-${suffixCls}`, className);

  return <TagName ref={ref} className={clsNames} {...others} />;
});

export interface GeneratorProps {
  suffixCls: string;
  tagName: 'header' | 'footer' | 'main' | 'section';
  displayName: string;
}

function generator({ suffixCls, tagName, displayName }: GeneratorProps) {
  return (BasicComponent: any) => {
    const Adapter = React.forwardRef<HTMLElement, LayoutProps>((props, ref) => (
      <BasicComponent ref={ref} suffixCls={suffixCls} tagName={tagName} {...props} />
    ));
    if (process.env.NODE_ENV !== 'production') {
      Adapter.displayName = displayName;
    }
    return Adapter;
  };
}

const Header = generator({
  suffixCls: 'header',
  tagName: 'header',
  displayName: 'Header',
})(Basic);

const Footer = generator({
  suffixCls: 'footer',
  tagName: 'footer',
  displayName: 'Footer',
})(Basic);

const Content = generator({
  suffixCls: 'content',
  tagName: 'main',
  displayName: 'Content',
})(Basic);

export { Header, Footer, Content };

export default Layout;
