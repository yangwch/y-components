import { CSSProperties, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { GetContainer } from '../../_utils/Portal';
import { AdjustConfig, Placement } from '../interface';
import { calcPopupPosition, getContainerElement } from '../utils';

interface Props {
  trigger: HTMLElement | null;
  overlay: HTMLDivElement | null;
  open: boolean;
  placement?: Placement;
  getPopupContainer?: GetContainer;
  offsetX?: number;
  offsetY?: number;
  autoAdjustPlacements?: AdjustConfig[];
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
    autoAdjustPlacements,
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
      autoAdjustPlacements,
    );

    if (overlayStyle.left !== left || overlayStyle.top !== top) {
      setOverlayStyle({ left, top });
    }
  }, [
    open,
    container,
    overlayStyle,
    placement,
    trigger,
    overlay,
    offsetX,
    offsetY,
    autoAdjustPlacements,
  ]);
  const propsRef = useRef(props);
  if (propsRef.current !== props) {
    propsRef.current = props;
  }
  // event listeners
  useEffect(() => {
    let timer: number;
    function onScroll() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        const {
          trigger,
          overlay,
          open,
          placement = 'top',
          getPopupContainer,
          offsetX = 0,
          offsetY = 0,
          autoAdjustPlacements,
        } = propsRef.current;
        const container = getContainerElement(getPopupContainer);
        if (!open) return;
        if (!container || !trigger || !overlay) return;
        const { left, top } = calcPopupPosition(
          placement,
          container,
          trigger,
          overlay,
          offsetX,
          offsetY,
          autoAdjustPlacements,
        );

        setOverlayStyle({ left, top });
      }, 10);
    }
    document.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    const offsetParent = trigger?.offsetParent;
    if (offsetParent && offsetParent !== document.body) {
      offsetParent.addEventListener('scroll', onScroll);
    }
    return () => {
      clearTimeout(timer);
      document.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (offsetParent && offsetParent !== document.body) {
        offsetParent.removeEventListener('scroll', onScroll);
      }
    };
  }, [trigger]);
  return { overlayStyle };
}

export default usePosition;