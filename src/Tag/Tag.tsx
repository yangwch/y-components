import classNames from 'classnames';
import React, { CSSProperties, useState } from 'react';
import { settings } from '../_utils/global';
import './style/index.less';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 文字颜色
   */
  color?: string;
  /**
   * 是否可见
   */
  visible?: boolean;
  /**
   * 行内样式
   * @type CSSProperties
   */
  style?: CSSProperties;
  /**
   * 是否可关闭
   */
  closable?: boolean;
  /**
   * 自定义关闭按钮
   */
  closeIcon?: React.ReactNode;
  /**
   * 关闭时回调函数
   * @type function(e)
   */
  onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
const tagCls = `${settings.prefix}-tag`;

export const Tag: React.FC<TagProps> = React.forwardRef<HTMLDivElement, TagProps>(
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
    const classes = classNames(tagCls, className, {
      [`${tagCls}-has-color`]: !!color,
    });
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
