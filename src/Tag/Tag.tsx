import classNames from 'classnames';
import React from 'react';
import { settings } from '../utils/global';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}
const tagCls = `${settings.prefix}-tag`;

const Tag: React.FC<TagProps> = React.forwardRef<HTMLDivElement, TagProps>(
  (props: TagProps, ref) => {
    const { color, children, className, ...rest } = props;
    const classes = classNames(tagCls, className);
    return (
      <div ref={ref} className={classes} {...rest}>
        {children}
      </div>
    );
  },
);

export default Tag;
