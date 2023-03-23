import classNames from 'classnames';
import React, { CSSProperties, ReactNode, useCallback, useMemo, useState } from 'react';
import Popup, { Placement, PopupProps } from '../Popup';
import { settings } from '../_utils/global';
import './style/index.less';
import { getAutoAdjustConfig } from './util';

const tooltipCls = `${settings.prefix}-tooltip`;

interface TooltipProps extends Omit<PopupProps, 'overlay'> {
  /**
   * 是否显示箭头
   * @default 'true'
   */
  arrow?: boolean;
  /**
   * 弹出提示
   */
  content: ReactNode;
  // tooltip 背景色
  color?: string;
  /**
   * 文本颜色
   */
  textColor?: string;
  /**
   * 弹出提示样式
   */
  contentStyle?: CSSProperties;
  /**
   * 自动定位，默认位置
   */
  autoAdjust?: boolean;
  /**
   * 定位变化回调
   * @type function(placement)
   */
  onPlacementChanged?: (placement: Placement) => void;
}

function Tooltip(props: TooltipProps) {
  const {
    children,
    arrow = true,
    className,
    placement: customPlacement = 'top',
    content,
    color,
    textColor,
    contentStyle,
    autoAdjust = true,
    onPlacementChanged,
    ...attrs
  } = props;
  const [renderedPlacement, setRenderedPlacement] = useState<Placement>(customPlacement);

  const popupCls = classNames(
    tooltipCls,
    `${tooltipCls}-${renderedPlacement}`,
    {
      [`${tooltipCls}-disabled-arrow`]: !arrow,
    },
    className,
  );
  const arrowCls = `${tooltipCls}-arrow`;

  const arrowStyle = {
    [`--${tooltipCls}-color`]: color,
  };

  const adJustConfig = useMemo(() => {
    if (!autoAdjust) return [];
    return getAutoAdjustConfig(customPlacement);
  }, [customPlacement, autoAdjust]);
  const placementChangeHandle = useCallback(
    (placement: Placement) => {
      setRenderedPlacement(placement);
    },
    [onPlacementChanged],
  );
  const renderOverlay = () => {
    return (
      <>
        {arrow && <div className={arrowCls} data-color={color} style={arrowStyle}></div>}
        <div
          className={`${tooltipCls}-content`}
          style={{ background: color, color: textColor, ...contentStyle }}
        >
          {content}
        </div>
      </>
    );
  };
  return (
    <Popup
      className={popupCls}
      overlay={renderOverlay()}
      placement={customPlacement}
      autoAdjustPlacements={adJustConfig}
      onPlacementChanged={placementChangeHandle}
      {...attrs}
    >
      {children}
    </Popup>
  );
}

export { Tooltip, TooltipProps };
