import { createPortal } from 'react-dom';
import { PortalProps } from './interface';
import { getContainerElement } from './utils';

function Portal(props: PortalProps) {
  const { children, getContainer, open, autoDestroy } = props;
  const container = getContainerElement(getContainer);
  if (!container) {
    return null;
  }
  if (!open && autoDestroy) return null;
  return createPortal(children, container);
}

export default Portal;
