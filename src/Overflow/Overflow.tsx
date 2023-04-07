import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { settings } from '../_utils/global';
import useVisibleCount from './hooks/useVisibleCount';
import { OverflowProps } from './interface';
import Item from './Item';
import './style/index.less';

const overflowCls = `${settings.prefix}-overflow`;
const defaultRenderRest = function (ommitedItems: any[]) {
  return `+ ${ommitedItems.length} ...`;
};

function InternalOverflow<ItemType>(
  props: OverflowProps<ItemType>,
  ref: React.ForwardedRef<Element>,
) {
  const {
    className,
    style,
    items = [],
    component: Component = 'div',
    itemComponent = 'div',
    renderItem,
    itemKey,
    renderRest: customRenderRest,
    maxLength: customMaxLength,
    suffix,
    prefix,
  } = props;
  const rootCls = classNames(overflowCls, className);

  const {
    maxLength,
    setItemSize,
    onRestWidthChange,
    onSuffixWidthChange,
    onPrefixWidthChange,
    onRootWidthChange,
  } = useVisibleCount<ItemType>({
    ref,
    items,
    maxLength: customMaxLength,
  });
  const renderItems = () => {
    return items.map((item, i) => {
      let node = renderItem ? renderItem(item) : (item as ReactNode);
      const key = itemKey ? itemKey(item) : i.toString();
      const itemCls = classNames(`${overflowCls}-item`, {
        [`${overflowCls}-item-hidden`]: i + 1 > maxLength,
      });
      return (
        <Item
          key={key}
          className={itemCls}
          onSizeChanged={(el: Element) => setItemSize(i, el)}
          component={itemComponent}
        >
          {node}
        </Item>
      );
    });
  };
  const renderRest = () => {
    const ommitedItems = items.slice(maxLength);
    if (!ommitedItems.length) return null;
    if (customRenderRest) {
      return typeof customRenderRest === 'function'
        ? customRenderRest(ommitedItems)
        : customRenderRest;
    }
    return defaultRenderRest(ommitedItems);
  };

  return (
    <Item ref={ref} className={rootCls} style={style} onSizeChanged={onRootWidthChange}>
      {prefix && (
        <Item
          className={`${overflowCls}-item ${overflowCls}-prefix`}
          onSizeChanged={onPrefixWidthChange}
        >
          {prefix}
        </Item>
      )}
      {renderItems()}
      <Item className={`${overflowCls}-rest`} onSizeChanged={onRestWidthChange}>
        {renderRest()}
      </Item>
      {suffix && (
        <Item
          className={`${overflowCls}-item ${overflowCls}-suffix`}
          onSizeChanged={onSuffixWidthChange}
        >
          {suffix}
        </Item>
      )}
    </Item>
  );
}

const Overflow = React.forwardRef(InternalOverflow);

export { Overflow };
