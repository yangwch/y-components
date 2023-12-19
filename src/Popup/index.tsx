import classNames from 'classnames';
import React, { PointerEvent, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { settings } from '../_utils/global';
import useComposedRef from '../_utils/useComposedRef';
import useForceUpdate from '../_utils/useForceUpate';
import {
  OFFSETX,
  OFFSETY,
  TRANSITION_DEFAULT_NAME,
  TRANSITION_DEFAULT_TIMEOUT,
  TRIGGER_DEFAULT_VALUE,
} from './constant';
import usePosition from './hooks/usePosition';
import { PopupProps } from './interface';
import Overlay from './Overlay';
import './style/index.less';
import { getWrappedChildProps } from './utils';

const popupCls = `${settings.prefix}-popup`;

const Popup = React.forwardRef<HTMLElement, PopupProps>((props: PopupProps, ref) => {
  const {
    visible,
    defaultVisible,
    overlay,
    children,
    getPopupContainer,
    forceRender = true,
    placement,
    style: customOverlayStyle,
    className: overlayClassName,
    offsetX = OFFSETX,
    offsetY = OFFSETY,
    trigger = TRIGGER_DEFAULT_VALUE,
    transitionName = TRANSITION_DEFAULT_NAME,
    transitionTimeout = TRANSITION_DEFAULT_TIMEOUT,
    autoAdjustPlacements,
    onPlacementChanged,
    onVisibleChange,
    visibleChangeDelay = 200,
  } = props;
  const isControlled = 'visible' in props;

  // ref for trigger
  const triggerRef = useRef<HTMLElement>(null);
  const composedTriggerRef = useComposedRef<HTMLElement>(ref, triggerRef);

  const [open, setOpen] = useState<boolean>(() => {
    if (isControlled) return !!visible;
    if ('defaultVisible' in props) return !!defaultVisible;
    return false;
  });

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const forceUpdate = useForceUpdate();

  const timerRef = useRef<number | NodeJS.Timer>();

  // 不强制渲染时，打开后，强制重新render一次，计算位置
  useEffect(() => {
    if (open && forceRender === false) {
      forceUpdate();
    }
    if (isControlled && open !== visible) {
      setOpen(!!visible);
    }
  }, [open, forceRender, isControlled, visible]);

  const { overlayStyle } = usePosition({
    triggerRef,
    overlayRef,
    open,
    placement,
    getPopupContainer,
    offsetX,
    offsetY,
    autoAdjustPlacements,
    onPlacementChanged,
  });

  const setOpenHandler = useCallback(
    (v?: boolean) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (isControlled) {
          onVisibleChange && onVisibleChange(typeof v === 'boolean' ? v : !open);
          return;
        }
        // set to true or false
        if (typeof v === 'boolean') {
          if (v !== open) {
            onVisibleChange && onVisibleChange(v);
          }
          setOpen(v);
          return;
        } else {
          // toggle
          onVisibleChange && onVisibleChange(!open);
          setOpen(!open);
        }
      }, visibleChangeDelay);
    },
    [onVisibleChange, isControlled, open],
  );

  const onOverlayPointerEnter = useCallback(
    (e: PointerEvent) => {
      clearTimeout(timerRef.current);
      setOpenHandler(true);
    },
    [setOpenHandler],
  );
  const onOverlayPointerLeave = useCallback(
    (e: PointerEvent) => {
      if (trigger && trigger.includes('hover')) {
        setOpenHandler(false);
      }
    },
    [setOpenHandler, trigger],
  );

  if (!children) return null;
  const child = React.Children.only(children) as ReactElement;
  const originChildProps = child?.props || {};

  const triggerNode = React.cloneElement(
    child,
    getWrappedChildProps(
      {
        ...originChildProps,
        ref: composedTriggerRef,
      },
      trigger,
      (v?: boolean) => setOpenHandler(v),
    ),
  );

  const overlayCls = classNames(
    popupCls,
    {
      [`${popupCls}-visible`]: open,
    },
    overlayClassName,
  );

  return (
    <>
      <Overlay
        open={open}
        ref={overlayRef}
        className={overlayCls}
        autoDestroy={!forceRender}
        getPopupContainer={getPopupContainer}
        style={{ ...overlayStyle, ...customOverlayStyle }}
        transitionName={transitionName}
        transitionTimeout={transitionTimeout}
        onPointerEnter={onOverlayPointerEnter}
        onPointerLeave={onOverlayPointerLeave}
      >
        {overlay}
      </Overlay>
      {triggerNode}
    </>
  );
});

export default Popup;
export * from './interface';
