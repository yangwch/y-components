import classNames from 'classnames';
import React, { useEffect, useMemo } from 'react';
import { layoutCls } from './constant';
import { useLayoutContext } from './LayoutContext';

export interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  hasSider?: boolean;
}

const Sider = React.forwardRef<HTMLDivElement, SiderProps>((props, ref) => {
  const { className, ...attrs } = props;
  const clsNames = classNames(`${layoutCls}-sider`, className);
  const id = useMemo(() => {
    return Symbol('sider');
  }, []);
  const { addSider, removeSider } = useLayoutContext();
  useEffect(() => {
    const id = Symbol('sider-id');
    addSider(id);
    return () => removeSider(id);
  }, [addSider, removeSider]);
  return <div ref={ref} className={clsNames} {...attrs} />;
});

export default Sider;
