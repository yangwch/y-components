import React, { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react';
import { DialogProps } from '../interface';
import Portal from '../Portal';
import { settings } from '../../utils/global';
import classNames from 'classnames';
import Mask from './Mask';
import Wrap from './Wrap';
import '../style/index.less';
import Content from './Content';
import Motion from '../../utils/Motion';

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
    closeIcon,
    onClose,
    afterClose,
    width,
    zIndex,
    motionStyles,
  } = props;
  const controllered = 'visible' in props;
  const [visible, setVisible] = useState<boolean>(controllered ? !!customVisible : false);

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
  useEffect(() => {
    if (!visible && afterClose) {
      afterClose();
    }
  }, [visible]);
  const maskClickHandler = useCallback(
    (e: React.SyntheticEvent) => {
      if (maskClosable) {
        onCloseHandler(e);
      }
    },
    [maskClosable],
  );
  const zIndexValue = 'zIndex' in props ? zIndex : 1000;
  const maskStyleValue: CSSProperties = useMemo(
    () => ({
      ...maskStyle,
      zIndex: zIndexValue,
    }),
    [maskStyle, zIndexValue],
  );
  const motionStyle: CSSProperties = useMemo(
    () => ({
      position: 'fixed',
      zIndex: zIndexValue,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    }),
    [zIndexValue],
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
          style={maskStyleValue}
          onClick={maskClickHandler}
        />
        <Motion visible={visible} style={motionStyle} motionStyles={motionStyles}>
          <Wrap
            prefixCls={dialogPrefix}
            className={className}
            closeIcon={closeIcon}
            style={{ width, zIndex: zIndexValue, ...contentStyle }}
            title={title}
            onClose={onCloseHandler}
          >
            <Content prefixCls={dialogPrefix} style={bodyStyle} className={bodyClassName}>
              {children}
            </Content>
          </Wrap>
        </Motion>
      </div>
    </Portal>
  );
};

export default Dialog;
