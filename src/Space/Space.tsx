import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { settings } from '../utils/global';
import Item from './Item';

const spacePrefix = `${settings.prefix}-space`;

type SpaceSize = number | string;

const defaultSpaceSize = 10;

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpaceSize | SpaceSize[];
  className?: string;
  style?: React.CSSProperties;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  wrap?: boolean;
}

const Space: React.FC<SpaceProps> = (props: SpaceProps) => {
  const {
    children,
    size = defaultSpaceSize,
    direction,
    align,
    wrap = false,
    className,
    ...rest
  } = props;
  if (!children) return null;
  const classes = classNames(`${spacePrefix}`, className, {
    [`${spacePrefix}-${direction}`]: !!direction,
    [`${spacePrefix}-align-${align}`]: !!align,
  });

  const spaceItemClass = `${spacePrefix}-item`;
  const nodes = React.Children.toArray(children);
  const renderItems = () => {
    return nodes.map((child, index) => {
      return (
        <Item className={spaceItemClass} index={index} key={`spaceItemClass-${index}`}>
          {child}
        </Item>
      );
    });
  };

  return (
    <div className={classes} {...rest}>
      {renderItems()}
    </div>
  );
};

export default Space;
