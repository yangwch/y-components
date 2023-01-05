import React from 'react';
import { createPortal } from 'react-dom';
import { GetContainer, PortalProps } from './interface';

const getContainerElement = (containerGetter?: GetContainer): HTMLElement | null => {
  if (containerGetter) {
    if (typeof containerGetter === 'function') {
      return containerGetter();
    }
    if (typeof containerGetter === 'string') {
      return document.querySelector(containerGetter);
    }
    return containerGetter;
  }
  return document.body;
};

function Portal(props: PortalProps) {
  const { children, getContainer } = props;
  const container = getContainerElement(getContainer);
  if (!container) {
    return null;
  }
  return createPortal(children, container);
}

export default Portal;
