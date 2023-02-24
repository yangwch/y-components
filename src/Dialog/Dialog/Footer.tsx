import React, { CSSProperties, ReactNode } from 'react';
import { cancelText, okText } from '../../constant/dialog';
import { Button, ButtonProps } from '../../index';
import Space from '../../Space';

interface FooterProps {
  style?: CSSProperties;
  okText?: ReactNode;
  okButtonProps?: ButtonProps;
  onOk?: (e: React.SyntheticEvent) => void;
  cancelText?: ReactNode;
  cancelButtonProps?: ButtonProps;
  onCancel?: (e: React.SyntheticEvent) => void;
  className: string;
  content: ReactNode | (() => ReactNode);
}
function Footer(props: FooterProps) {
  const {
    className,
    content,
    style,
    okText: customOkText,
    okButtonProps,
    onOk,
    cancelText: customCancelText,
    cancelButtonProps,
    onCancel,
  } = props;
  const renderContent = () => {
    if (content !== undefined) {
      return typeof content === 'function' ? content() : null;
    }
    return (
      <Space>
        <Button onClick={onCancel} {...cancelButtonProps}>
          {customCancelText !== undefined ? customCancelText : cancelText}
        </Button>
        <Button type="primary" onClick={onOk} {...okButtonProps}>
          {customOkText !== undefined ? customOkText : okText}
        </Button>
      </Space>
    );
  };
  return (
    <div className={className} style={style}>
      {renderContent()}
    </div>
  );
}

export default Footer;
