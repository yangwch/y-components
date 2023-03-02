import { CSSProperties, ReactElement, ReactNode } from 'react';

export type GetContainer = string | HTMLElement | (() => HTMLElement);

export interface PortalProps {
  children?: any;
  getContainer?: GetContainer;
  open?: boolean;
  autoDestroy?: boolean;
}

export type Placement =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

export type TriggerEvent = 'click' | 'hover' | 'focus';

export interface PopupProps {
  visible: boolean;
  defaultVisible?: boolean;
  overlay: ReactNode;
  style?: CSSProperties;
  className?: string;
  offsetX?: number;
  offsetY?: number;
  children: ReactElement;
  getPopupContainer?: GetContainer;
  forceRender?: boolean;
  placement?: Placement;
  trigger?: TriggerEvent[];
}
