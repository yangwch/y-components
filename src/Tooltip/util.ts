import { AdjustConfig, Placement } from '../Popup';

const AdjustData: Record<Placement, AdjustConfig[]> = {
  left: [{ placement: 'right' }],
  right: [{ placement: 'left' }],
  top: [{ placement: 'bottom' }],
  bottom: [{ placement: 'top' }],
  topLeft: [{ placement: 'bottomLeft' }],
  topRight: [{ placement: 'bottomRight' }],
  bottomLeft: [{ placement: 'topLeft' }],
  bottomRight: [{ placement: 'topRight' }],
  leftTop: [{ placement: 'rightTop' }],
  leftBottom: [{ placement: 'rightBottom' }],
  rightTop: [{ placement: 'leftTop' }],
  rightBottom: [{ placement: 'leftBottom' }],
};

export const getAutoAdjustConfig = (placement: Placement): AdjustConfig[] => {
  return AdjustData[placement];
};
