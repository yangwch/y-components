import { createPortal } from 'react-dom';
import { getContainerElement } from '../Popup/utils';

export type GetContainer = string | HTMLElement | (() => HTMLElement);

export interface PortalProps {
  children?: any;
  getContainer?: GetContainer;
  open?: boolean;
  autoDestroy?: boolean;
}

function Portal(props: PortalProps) {
  const { children, getContainer, open = true, autoDestroy } = props;
  const container = getContainerElement(getContainer);
  if (!container) {
    return null;
  }
  if (!open && autoDestroy) return null;
  return createPortal(children, container);
}

export default Portal;
