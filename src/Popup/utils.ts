import React from 'react';
import { GetContainer } from '../_utils/Portal';
import { AdjustConfig, Placement, TriggerEvent } from './interface';

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

function calcOverlayIsOverflow(
  position: { left: number; top: number },
  overlayBox: RectBox,
): boolean {
  if (position.left < 0 || position.top < 0) {
    return true;
  }
  const { innerWidth, innerHeight } = window;
  if (position.left + overlayBox.width > innerWidth) {
    return true;
  }
  if (position.top + overlayBox.height > innerHeight) {
    return true;
  }
  return false;
}

export const calcPopupPosition = (
  placement: Placement,
  container: HTMLElement,
  trigger: HTMLElement,
  overlay: HTMLElement,
  offsetX: number,
  offsetY: number,
  autoAjustPlacements?: AdjustConfig[],
): { left?: number; top?: number; placement: Placement } => {
  if (!trigger || !container || !overlay) return { placement };
  const triggerBox = getElementRect(trigger, container);
  const overlayBox = getElementRect(overlay, container);
  let left;
  let top;
  let nplacement = placement;
  switch (placement) {
    case 'top':
      left = triggerBox.x + triggerBox.width / 2 - overlayBox.width / 2;
      top = triggerBox.y - overlayBox.height;
      break;
    default:
    case 'bottom':
      left = triggerBox.x + triggerBox.width / 2 - overlayBox.width / 2;
      top = triggerBox.y + triggerBox.height;
      break;
    case 'left':
      left = triggerBox.x - overlayBox.width;
      top = triggerBox.y + triggerBox.height / 2 - overlayBox.height / 2;
      break;
    case 'right':
      left = triggerBox.x + triggerBox.width;
      top = triggerBox.y + triggerBox.height / 2 - overlayBox.height / 2;
      break;
    case 'topLeft':
      left = triggerBox.x;
      top = triggerBox.y - overlayBox.height;
      break;
    case 'topRight':
      left = triggerBox.x + triggerBox.width - overlayBox.width;
      top = triggerBox.y - overlayBox.height;
      break;
    case 'bottomLeft':
      left = triggerBox.x;
      top = triggerBox.y + triggerBox.height;
      break;
    case 'bottomRight':
      left = triggerBox.x + triggerBox.width - overlayBox.width;
      top = triggerBox.y + triggerBox.height;
      break;
  }
  left += offsetX;
  top += offsetY;
  if (autoAjustPlacements && calcOverlayIsOverflow({ left, top }, overlayBox)) {
    for (let i = 0; i < autoAjustPlacements.length; i++) {
      const config = autoAjustPlacements[i];
      const { placement: p, offsetX: ox = 0, offsetY: oy = 0 } = config;
      const pos = calcPopupPosition(p, container, trigger, overlay, ox, oy);
      if (pos && typeof pos.left === 'number' && typeof pos.top === 'number') {
        const isOverflow = calcOverlayIsOverflow({ left: pos.left, top: pos.top }, overlayBox);
        if (!isOverflow) {
          nplacement = p;
          return pos;
        }
      }
    }
  }
  return { left, top, placement: nplacement };
};

export const getWrappedChildProps = (
  originProps: any,
  trigger: TriggerEvent[],
  callback: (visible?: boolean) => void,
) => {
  const callOriginEvent = (eventName: string, e: React.SyntheticEvent) => {
    const call = originProps[eventName];
    if (call && typeof call === 'function') {
      call(e);
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
    onPointerLeave: (e: React.SyntheticEvent) => {
      callOriginEvent('onPointerLeave', e);
      if (e.isDefaultPrevented() || !trigger.includes('hover')) return;
      callback(false);
    },
  };
};
