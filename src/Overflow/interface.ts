import { CSSProperties } from 'react';

export type ComponentType =
  | keyof React.ReactHTML
  | React.FC<any>
  | React.ComponentType<any>
  | React.ForwardRefExoticComponent<any>;

export interface OverflowProps<ItemType> {
  component?: ComponentType;
  itemComponent?: ComponentType;
  className?: string;
  style?: CSSProperties;
  items?: ItemType[];
  itemKey?: (item: ItemType) => string;
  renderItem?: (data: ItemType) => React.ReactNode;
  renderRest?: React.ReactNode | ((omittedItems: ItemType[]) => React.ReactNode);
  suffix?: React.ReactNode;
  maxLength?: number;
}
