import { CSSProperties } from 'react';

export type ComponentType =
  | keyof React.ReactHTML
  | React.FC<any>
  | React.ComponentType<any>
  | React.ForwardRefExoticComponent<any>;

export interface OverflowProps<ItemType> {
  /**
   * 外层组件类型
   * @default div
   * @type string | React.FC<any> | React.ComponentType<any> | React.ForwardRefExoticComponent<any>
   */
  component?: ComponentType;
  /**
   * 每项的组件类型
   * @type string | React.FC<any> | React.ComponentType<any> | React.ForwardRefExoticComponent<any>
   */
  itemComponent?: ComponentType;
  /**
   * 类名
   */
  className?: string;
  /**
   * 行内样式
   * @type CSSProperties
   */
  style?: CSSProperties;
  /**
   * 选项列表
   */
  items?: ItemType[];
  /**
   * 每项key
   * @type (item) => string
   * @default index
   */
  itemKey?: (item: ItemType) => string;
  /**
   * 选项自定义渲染
   * @type (item) => ReactNode
   */
  renderItem?: (data: ItemType) => React.ReactNode;
  /**
   * 自定义『更多』选项
   * @type React.ReactNode | ((omittedItems: ItemType[]) => React.ReactNode)
   */
  renderRest?: React.ReactNode | ((omittedItems: ItemType[]) => React.ReactNode);
  /**
   * 行首
   */
  prefix?: React.ReactNode;

  /**
   * 末尾
   */
  suffix?: React.ReactNode;
  /**
   * 最大渲染数
   */
  maxLength?: number;
}
