import React, { RefObject } from 'react';
import classNames from 'classnames';
import { settings } from '../utils/global';
import { tuple } from '../_utils/type';
import './style/index.less';

const btn_cls_prefix = settings.prefix;

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');

export type ButtonType = typeof ButtonTypes[number];

interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  danger?: Boolean;
  disabled?: Boolean;
}

function Button(props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { type = 'default', children, danger = false, disabled } = props;

  const clsNames = classNames({
    [`${btn_cls_prefix}-btn`]: true,
    [`${btn_cls_prefix}-btn-${type}`]: type !== 'default',
    [`${btn_cls_prefix}-btn-danger`]: !!danger,
  });
  return (
    <button className={clsNames} disabled={!!disabled} ref={ref}>
      {children}
    </button>
  );
}

export default React.forwardRef(Button);
