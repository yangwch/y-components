import { CSSProperties, ReactNode, SyntheticEvent } from 'react';
import { ButtonProps } from '../Button';
import { MotionStyles } from '../_utils/Motion';

export type GetContainer = string | HTMLElement | (() => HTMLElement);

export interface DialogProps {
  className?: string;
  keyboard?: boolean;
  style?: CSSProperties;
  mask?: boolean;

  centered?: boolean;

  children?: any;
  closeIcon?: ReactNode;
  afterClose?: () => any;
  onClose?: (e: SyntheticEvent) => any;
  closable?: boolean;
  maskClosable?: boolean;
  visible?: boolean;
  destroyOnClose?: boolean;

  title?: ReactNode;
  footer?: ReactNode | (() => ReactNode);
  footerStyle?: CSSProperties;

  okText?: ReactNode;
  okButtonProps?: ButtonProps;
  onOk?: (e: React.SyntheticEvent) => void;
  cancelText?: ReactNode;
  cancelButtonProps?: ButtonProps;
  onCancel?: (e: React.SyntheticEvent) => void;

  getContainer?: GetContainer;
  rootClassName?: string;
  maskClassName?: string;
  maskStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  bodyClassName?: string;
  width?: number;
  zIndex?: number;
  disableTransition?: boolean;
  transitionStyles?: MotionStyles;
}

export interface PortalProps {
  children?: any;
  getContainer?: GetContainer;
}
