import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { settings } from '../_utils/global';
import Item from './Item';
import './style/index.less';
import { getSpaceStyle } from './utils';

const spacePrefix = `${settings.prefix}-space`;

export type SpaceSize = number | string;

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
    direction = 'horizontal',
    align,
    wrap = false,
    className,
    style: customStyle,
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

  const style: React.CSSProperties = {
    ...getSpaceStyle(size, direction),
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...customStyle,
  };

  return (
    <div className={classes} style={style} {...rest}>
      {renderItems()}
    </div>
  );
};

export default Space;
