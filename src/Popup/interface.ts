import { CSSProperties, ReactElement, ReactNode } from 'react';
import { GetContainer } from '../_utils/Portal';

export type Placement =
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

export type TriggerEvent = 'click' | 'hover' | 'focus';

export interface AdjustConfig {
  placement: Placement;
  offsetX?: number;
  offsetY?: number;
}

export interface PopupProps {
  /**
   * 受制模式，控制是否显示
   */
  visible?: boolean;
  /**
   * 默认是否显示
   * @default 'false'
   */
  defaultVisible?: boolean;
  /**
   * 弹出层内容
   * @requires
   * @type ReactNode
   */
  overlay: ReactNode;
  /**
   * 自定义overlay容器dom样式
   */
  style?: CSSProperties;
  /**
   * 类名
   */
  className?: string;
  /**
   * 横向偏移
   */
  offsetX?: number;
  /**
   * 纵向偏移
   */
  offsetY?: number;
  /**
   * trigger内容
   */
  children: ReactElement;
  /**
   * 获取弹出层容器
   * @type string | HTMLElement | (() => HTMLElement)
   * @default document.body
   */
  getPopupContainer?: GetContainer;
  /**
   * 是否强制渲染
   * @default 'true'
   */
  forceRender?: boolean;
  /**
   * 弹出位置 可选：'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
   * @default top
   */
  placement?: Placement;
  /**
   * 自动调整备选配置，placement的位置超出时的备选
   *
   * 示例：[{ placement: 'bottom', offsetX: 0, offsetY: 10 }]
   * @type AdjustConfig[]
   */
  autoAdjustPlacements?: AdjustConfig[];
  /**
   * 触发方式，可选 "click" | "hover" | "focus"
   * @default "['hover']"
   * @type TriggerEvent[]
   */
  trigger?: TriggerEvent[];
  /**
   * 动画名
   * @default fade
   */
  transitionName?: string;
  /**
   * 动画时长
   * @default 200
   */
  transitionTimeout?: number;
  /**
   * 重新定位后回调
   * @param placement
   */
  onPlacementChanged?: (placement: Placement) => void;
  /**
   * 显示改变回调
   * @type function(visible)
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * 切换显示状态延迟时间
   * @type 毫秒
   * @default 200毫秒
   */
  visibleChangeDelay?: number;
}
