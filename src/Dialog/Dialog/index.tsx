import React, { useState } from 'react';
import { DialogProps } from '../interface';
import Portal from '../Portal';
import { settings } from '../../utils/global';
import classNames from 'classnames';
import Mask from './Mask';
import Wrap from './Wrap';
import '../style/index.less';

const dialogPrefix = `${settings.prefix}-dialog`;

const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
  const {
    children,
    className,
    visible: customVisible,
    getContainer,
    destroyOnClose,
    rootClassName,
    mask = true,
    maskClassName,
    maskStyle,
    contentStyle = {},
    title,
  } = props;
  const [visible, setVisible] = useState<Boolean>('visible' in props ? !!customVisible : false);

  if (!visible && destroyOnClose) {
    return null;
  }
  const rootCls = classNames(`${dialogPrefix}-root`, rootClassName, {
    [`visible`]: visible,
  });
  return (
    <Portal getContainer={getContainer}>
      <div className={rootCls}>
        <Mask
          visible={visible && mask}
          prefixCls={dialogPrefix}
          className={maskClassName}
          style={maskStyle}
        />
        <Wrap prefixCls={dialogPrefix} className={className} style={contentStyle} title={title}>
          {children}
        </Wrap>
      </div>
    </Portal>
  );
};

export default Dialog;
