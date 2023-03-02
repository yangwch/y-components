import { CSSProperties, useEffect, useLayoutEffect, useState } from 'react';
import { GetContainer, Placement } from '../interface';
import { calcPopupPosition, getContainerElement } from '../utils';

interface Props {
  trigger: HTMLElement | null;
  overlay: HTMLDivElement | null;
  open: boolean;
  placement?: Placement;
  getPopupContainer?: GetContainer;
  offsetX?: number;
  offsetY?: number;
}
function usePosition(props: Props) {
  const {
    trigger,
    overlay,
    open,
    placement = 'top',
    getPopupContainer,
    offsetX = 0,
    offsetY = 0,
  } = props;
  const [overlayStyle, setOverlayStyle] = useState<CSSProperties>({});
  // dom
  const container = getContainerElement(getPopupContainer);

  useLayoutEffect(() => {
    if (!open || !trigger || !overlay || !container) return;
    const { left, top } = calcPopupPosition(
      placement,
      container,
      trigger,
      overlay,
      offsetX,
      offsetY,
    );

    if (overlayStyle.left !== left || overlayStyle.top !== top) {
      setOverlayStyle({ left, top });
    }
  }, [open, container, overlayStyle, placement, trigger, overlay, offsetX, offsetY]);
  // event listeners
  useEffect(() => {
    let timer: number;
    function onScroll() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (!open) return;
        if (!container || !trigger || !overlay) return;
        const { left, top } = calcPopupPosition(
          placement,
          container,
          trigger,
          overlay,
          offsetX,
          offsetY,
        );

        setOverlayStyle({ left, top });
      }, 10);
    }
    document.addEventListener('scroll', onScroll);
    const offsetParent = trigger?.offsetParent;
    if (offsetParent && offsetParent !== document.body) {
      offsetParent.addEventListener('scroll', onScroll);
    }
    return () => {
      clearTimeout(timer);
      document.removeEventListener('scroll', onScroll);
      if (offsetParent && offsetParent !== document.body) {
        offsetParent.removeEventListener('scroll', onScroll);
      }
    };
  }, [open, container, placement, trigger, overlay, offsetX, offsetY]);
  return { overlayStyle };
}

export default usePosition;
