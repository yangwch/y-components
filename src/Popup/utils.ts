import React, { CSSProperties } from 'react';
import { GetContainer, Placement, TriggerEvent } from './interface';

export const getContainerElement = (containerGetter?: GetContainer): HTMLElement | null => {
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

interface RectBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const getElementRect = (el: HTMLElement, container: HTMLElement): RectBox => {
  const bounding = el.getBoundingClientRect();
  const { left, top, width, height } = bounding;
  var x = left + container.scrollLeft;

  var y = top + container.scrollTop;
  return {
    x,
    y,
    width,
    height,
  };
};

export const calcPopupPosition = (
  placement: Placement,
  container: HTMLElement,
  trigger: HTMLElement,
  overlay: HTMLElement,
  offsetX: number,
  offsetY: number,
): CSSProperties => {
  if (!trigger || !container || !overlay) return {};
  const triggerBox = getElementRect(trigger, container);
  const overlayBox = getElementRect(overlay, container);
  let left;
  let top;
  switch (placement) {
    case 'top':
      left = triggerBox.x + triggerBox.width / 2 - overlayBox.width / 2;
      top = triggerBox.y - overlayBox.height - offsetY;
      break;
    default:
    case 'bottom':
      left = triggerBox.x + triggerBox.width / 2 - overlayBox.width / 2;
      top = triggerBox.y + triggerBox.height + offsetY;
      break;
    case 'left':
      left = triggerBox.x - overlayBox.width - offsetX;
      top = triggerBox.y + triggerBox.height / 2 - overlayBox.height / 2;
      break;
    case 'right':
      left = triggerBox.x + triggerBox.width + offsetX;
      top = triggerBox.y + triggerBox.height / 2 - overlayBox.height / 2;
  }
  return { left, top };
};

export const getWrappedChildProps = (
  originProps: any,
  trigger: TriggerEvent[],
  callback: (visible?: boolean) => void,
) => {
  const callOriginEvent = (eventName: string, e: React.SyntheticEvent) => {
    if (originProps.eventName && typeof originProps[eventName] === 'function') {
      originProps[eventName](e);
    }
  };
  return {
    ...originProps,
    onClick: (e: React.SyntheticEvent) => {
      callOriginEvent('onClick', e);
      if (e.isDefaultPrevented() || !trigger.includes('click')) return;
      callback();
    },
    onFocus: (e: React.SyntheticEvent) => {
      callOriginEvent('onFocus', e);
      if (e.isDefaultPrevented() || !trigger.includes('focus')) return;
      callback(true);
    },
    onBlur: (e: React.SyntheticEvent) => {
      callOriginEvent('onBlur', e);
      if (e.isDefaultPrevented() || !trigger.includes('focus')) return;
      callback(false);
    },
    onPointerEnter: (e: React.SyntheticEvent) => {
      callOriginEvent('onPointerEnter', e);
      if (e.isDefaultPrevented() || !trigger.includes('hover')) return;
      callback(true);
    },
    onPointerOut: (e: React.SyntheticEvent) => {
      callOriginEvent('onPointerOut', e);
      if (e.isDefaultPrevented() || !trigger.includes('hover')) return;
      callback(false);
    },
  };
};
