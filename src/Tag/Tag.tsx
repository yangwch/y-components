import classNames from 'classnames';
import React, { CSSProperties, useState } from 'react';
import { settings } from '../utils/global';
import './style/index.less';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  visible?: boolean;
  style?: CSSProperties;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
const tagCls = `${settings.prefix}-tag`;

const Tag: React.FC<TagProps> = React.forwardRef<HTMLDivElement, TagProps>(
  (props: TagProps, ref) => {
    const {
      color,
      children,
      className,
      style,
      visible: customVisible,
      closeIcon,
      onClose,
      closable,
      ...rest
    } = props;
    const classes = classNames(tagCls, className);
    const [visible, setVisible] = useState<boolean>('visible' in props ? !!customVisible : true);

    if (!visible) {
      return null;
    }

    const tagStyle = {
      ...style,
      background: color || '',
    };
    const onCloseIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClose) {
        onClose(e);
      }
      if (e.defaultPrevented) {
        return;
      }
      if (!('visible' in props)) {
        setVisible(!visible);
      }
    };
    const renderCloseIcon = () => {
      if (!closable) return null;
      if (closeIcon) {
        return (
          <span className={`${tagCls}-close-icon`} onClick={onCloseIconClick}>
            {closeIcon}
          </span>
        );
      }
      return (
        <span className={`${tagCls}-close-icon`} onClick={onCloseIconClick}>
          ✕
        </span>
      );
    };
    return (
      <div ref={ref} style={tagStyle} className={classes} {...rest}>
        {children}
        {renderCloseIcon()}
      </div>
    );
  },
);

export default Tag;
