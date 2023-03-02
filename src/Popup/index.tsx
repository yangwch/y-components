import classNames from 'classnames';
import React, { ReactElement, useState } from 'react';
import { settings } from '../utils/global';
import { OFFSETX, OFFSETY } from './constant';
import usePosition from './hooks/usePosition';
import useTriggerRef from './hooks/useTriggerRef';
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
    trigger = ['hover'],
  } = props;

  const [open, setOpen] = useState<boolean>(() => {
    if ('visible' in props) return !!visible;
    if ('defaultVisible' in props) return !!defaultVisible;
    return false;
  });

  const { setRef, ref: triggerRef } = useTriggerRef(ref);
  const [overlayDom, setOverlayDom] = useState<HTMLDivElement | null>(null);

  const { overlayStyle } = usePosition({
    trigger: triggerRef.current,
    overlay: overlayDom,
    open,
    placement,
    getPopupContainer,
    offsetX,
    offsetY,
  });

  if (!children) return null;
  const child = React.Children.only(children) as ReactElement;
  const originChildProps = child?.props || {};

  const triggerNode = React.cloneElement(
    child,
    getWrappedChildProps(
      {
        ...originChildProps,
        ref: setRef,
      },
      trigger,
      (v?: boolean) => {
        if (typeof v === 'boolean') {
          setOpen(v);
          return;
        }
        setOpen((p) => !p);
      },
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
        ref={(el: HTMLDivElement) => setOverlayDom(el)}
        className={overlayCls}
        autoDestroy={!forceRender}
        getPopupContainer={getPopupContainer}
        style={{ ...overlayStyle, ...customOverlayStyle }}
      >
        {overlay}
      </Overlay>
      {triggerNode}
    </>
  );
});

export default Popup;
export * from './interface';
