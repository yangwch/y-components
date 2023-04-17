import React, { useRef } from 'react';
import { mountTest } from '../../test/shared/mountTest';
import { Overflow } from './Overflow';

describe('Overflow', () => {
  interface ItemType {
    label: string;
    value: string;
  }

  const makeItems = (itemsCount: number) => {
    const items: ItemType[] = [];

    for (let i = 0; i < itemsCount; i++) {
      items.push({ label: 'item ' + (i + 1), value: 'item' + (i + 1) });
    }
    return items;
  };

  mountTest(() => {
    const ref = useRef<HTMLDivElement>(null);
    return (
      <Overflow<ItemType>
        ref={ref}
        items={makeItems(5)}
        renderItem={(data: ItemType) => <span>{data.label}</span>}
      ></Overflow>
    );
  });
});
