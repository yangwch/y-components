import { CSSProperties, ReactNode, SyntheticEvent } from "react";

export type GetContainer = string | HTMLElement | (() => HTMLElement);

export interface DialogProps {
  className?: string;
  keyboard?: boolean;
  style?: CSSProperties;
  mask?: boolean;
  children?: any;
  afterClose?: () => any;
  onClose?: (e: SyntheticEvent) => any;
  closable?: boolean;
  maskClosable?: boolean;
  visible?: boolean;
  destroyOnClose?: boolean;
  title?: ReactNode;
  footer?: ReactNode;
  getContainer?: GetContainer;
  rootClassName?: string;
  maskClassName?: string;
  maskStyle?: CSSProperties;
  contentStyle?: CSSProperties;
}

export interface PortalProps {
  children?: any;
  getContainer?: GetContainer;
}