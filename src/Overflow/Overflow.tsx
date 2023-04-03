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
  } = props;
  const rootCls = classNames(overflowCls, className);

  const { maxLength, setItemRef, composedRef, restRef } = useVisibleCount<ItemType>({
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
          setRef={(el: Element) => setItemRef(i, el)}
          component={itemComponent}
        >
          {node}
        </Item>
      );
    });
  };
  const renderRest = () => {
    const ommitedItems = items.slice(maxLength);
    if (customRenderRest) {
      return typeof customRenderRest === 'function'
        ? customRenderRest(ommitedItems)
        : customRenderRest;
    }
    return defaultRenderRest(ommitedItems);
  };

  return (
    <Component ref={composedRef} className={rootCls} style={style}>
      {renderItems()}
      <div className={`${overflowCls}-rest`} ref={restRef}>
        {renderRest()}
      </div>
    </Component>
  );
}

const Overflow = React.forwardRef(InternalOverflow);

export { Overflow };
