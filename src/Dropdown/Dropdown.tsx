import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Placement } from '../Popup';
import { Tooltip, TooltipProps } from '../Tooltip';
import { settings } from '../_utils/global';
import './style/index.less';

const dropdownCls = `${settings.prefix}-dropdown`;

interface DropdownProps extends TooltipProps {
  /**
   * 自定义弹出内容
   * @type () => ReactNode
   */
  render?: () => ReactNode | ReactNode;
  /**
   * 弹出位置
   * @default 'bottomLeft'
   */
  placement?: Placement;
  /**
   * 是否显示箭头
   * @default 'false'
   */
  arrow?: boolean;
}

function Dropdown(props: DropdownProps) {
  const { render, content, placement = 'bottomLeft', arrow = false, className, ...attrs } = props;
  const renderContent = () => {
    if (render) {
      return typeof render === 'function' ? render() : render;
    }
    return content;
  };
  const clsNames = classNames(dropdownCls, className);
  return (
    <Tooltip
      content={renderContent()}
      placement={placement}
      arrow={arrow}
      className={clsNames}
      {...attrs}
    />
  );
}

export { Dropdown, DropdownProps };
