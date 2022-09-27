import React from 'react'
import { settings } from '../utils/global'
import './style/index.less'

function Button() {
  const classNames = `${settings.prefix}-btn ${settings.prefix}-btn-primary`
  return (
    <button className={classNames}>Button</button>
  )
}

export default Button