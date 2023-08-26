import classNames from 'classnames';
import React, { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react';
import { settings } from '../../_utils/global';
import IdentifyCreator from '../../_utils/identity';
import Motion from '../../_utils/Motion';
import Portal from '../../_utils/Portal';
import { DialogProps } from '../interface';
import '../style/index.less';
import Content from './Content';
import Footer from './Footer';
import Mask from './Mask';
import Wrap from './Wrap';

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
    centered,
    maskClassName,
    maskStyle,
    contentStyle = {},
    title,
    bodyStyle,
    bodyClassName,
    maskClosable = true,
    closable = true,
    closeIcon,
    onClose,
    afterClose,
    width,
    zIndex,
    disableTransition = false,
    transitionStyles,
    footer,
    footerStyle,
    okText,
    okButtonProps,
    cancelText,
    cancelButtonProps,
    onOk,
    onCancel,
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
  // z-index
  const zIndexValue = useMemo(() => {
    return 'zIndex' in props ? zIndex : 1000 + IdentifyCreator.getInstance().create();
  }, [props.zIndex]);
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
  const okClickHandle = (e: React.SyntheticEvent) => {
    if (onOk) {
      onOk(e);
    }
    onCloseHandler(e);
  };

  const cancelClickHandle = (e: React.SyntheticEvent) => {
    if (onCancel) {
      onCancel(e);
    }
    onCloseHandler(e);
  };

  if (!visible && destroyOnClose) {
    return null;
  }
  const footerProps = {
    className: `${dialogPrefix}-footer`,
    style: footerStyle,
    okText,
    okButtonProps,
    cancelText,
    cancelButtonProps,
    onOk: okClickHandle,
    onCancel: cancelClickHandle,
  };
  const renderFooter = () => {
    return <Footer {...footerProps} content={footer} />;
  };
  return (
    <Portal getContainer={getContainer}>
      <div className={rootCls} style={{ zIndex: zIndexValue }}>
        <Mask
          visible={visible && mask}
          prefixCls={dialogPrefix}
          className={maskClassName}
          style={maskStyleValue}
          onClick={maskClickHandler}
        />
        <Motion
          visible={visible}
          style={motionStyle}
          motionStyles={transitionStyles}
          disableTransition={disableTransition}
          onClick={maskClickHandler}
        >
          <Wrap
            prefixCls={dialogPrefix}
            className={className}
            closeIcon={closeIcon}
            style={{ width, ...contentStyle }}
            title={title}
            onClose={onCloseHandler}
            closable={closable}
            centered={centered}
          >
            <Content prefixCls={dialogPrefix} style={bodyStyle} className={bodyClassName}>
              {children}
              {renderFooter()}
            </Content>
          </Wrap>
        </Motion>
      </div>
    </Portal>
  );
};

export default Dialog;
