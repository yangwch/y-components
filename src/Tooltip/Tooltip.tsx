import classNames from 'classnames';
import React, { CSSProperties, ReactNode } from 'react';
import Popup, { PopupProps } from '../Popup';
import { settings } from '../_utils/global';
import './style/index.less';

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
}

function Tooltip(props: TooltipProps) {
  const {
    children,
    arrow = true,
    className,
    placement = 'top',
    content,
    color,
    textColor,
    contentStyle,
    ...attrs
  } = props;

  const popupCls = classNames(tooltipCls, `${tooltipCls}-${placement}`, {
    [`${tooltipCls}-disabled-arrow`]: !arrow,
  });
  const arrowCls = `${tooltipCls}-arrow`;

  const arrowStyle = {
    [`--${tooltipCls}-color`]: color,
  };
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
    <Popup className={popupCls} overlay={renderOverlay()} placement={placement} {...attrs}>
      {children}
    </Popup>
  );
}

export default Tooltip;
