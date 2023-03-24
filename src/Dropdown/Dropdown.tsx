import classNames from 'classnames';
import React from 'react';
import { DROPDOWN_COLOR } from '../constant/dropdown';
import { Tooltip } from '../Tooltip';
import { settings } from '../_utils/global';
import DropdownMenu from './DropdownMenu';
import { DropdownProps } from './interface';
import './style/index.less';

const dropdownCls = `${settings.prefix}-dropdown`;

function Dropdown(props: DropdownProps) {
  const {
    render,
    content,
    placement = 'bottomLeft',
    arrow = false,
    color = DROPDOWN_COLOR,
    className,
    menu,
    ...attrs
  } = props;
  const renderContent = () => {
    if (render) {
      return typeof render === 'function' ? render() : render;
    }
    if (menu) {
      return <DropdownMenu menu={menu} />;
    }
    return content;
  };
  const clsNames = classNames(dropdownCls, className);
  return (
    <Tooltip
      color={color}
      content={renderContent()}
      placement={placement}
      arrow={arrow}
      className={clsNames}
      {...attrs}
    />
  );
}

export { Dropdown };
