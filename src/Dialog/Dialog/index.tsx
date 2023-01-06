import React, { useCallback, useEffect, useState } from 'react';
import { DialogProps } from '../interface';
import Portal from '../Portal';
import { settings } from '../../utils/global';
import classNames from 'classnames';
import Mask from './Mask';
import Wrap from './Wrap';
import '../style/index.less';
import Content from './Content';

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
    bodyStyle,
    bodyClassName,
    maskClosable = true,
    onClose,
    width,
  } = props;
  const controllered = 'visible' in props;
  const [visible, setVisible] = useState<Boolean>(controllered ? !!customVisible : false);

  useEffect(() => {
    setVisible(!!customVisible);
  }, [customVisible]);
  const rootCls = classNames(`${dialogPrefix}-root`, rootClassName, {
    [`visible`]: visible,
  });
  const onCloseHandler = useCallback(
    (e: React.SyntheticEvent) => {
      if (!controllered) {
        setVisible(false);
      }
      if (onClose) {
        onClose(e);
      }
    },
    [visible, controllered],
  );
  const maskClickHandler = useCallback(
    (e: React.SyntheticEvent) => {
      if (maskClosable) {
        onCloseHandler(e);
      }
    },
    [maskClosable],
  );
  if (!visible && destroyOnClose) {
    return null;
  }
  return (
    <Portal getContainer={getContainer}>
      <div className={rootCls}>
        <Mask
          visible={visible && mask}
          prefixCls={dialogPrefix}
          className={maskClassName}
          style={maskStyle}
          onClick={maskClickHandler}
        />
        <Wrap
          prefixCls={dialogPrefix}
          className={className}
          style={{ width, ...contentStyle }}
          title={title}
          onClose={onCloseHandler}
        >
          <Content
            prefixCls={dialogPrefix}
            style={bodyStyle}
            className={bodyClassName}
          >
            {children}
          </Content>
        </Wrap>
      </div>
    </Portal>
  );
};

export default Dialog;
