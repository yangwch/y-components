import React from 'react';
import { SpaceSize } from '../Space';

const getSpaceSize = (size: SpaceSize | SpaceSize[]): SpaceSize[] => {
  if (size instanceof Array && size.length) {
    if (size.length === 1) {
      return [size[0], size[0]];
    }
    return size;
  }
  if (typeof size === 'string' || typeof size === 'number') {
    return [size, size];
  }
  return [10, 10];
};

export const getSpaceStyle = (
  size: SpaceSize | SpaceSize[],
  direction: 'horizontal' | 'vertical',
): React.CSSProperties => {
  const [rowGap, columnGap] = getSpaceSize(size);
  if (direction === 'horizontal') {
  }
  return {
    rowGap,
    columnGap,
  };
};
