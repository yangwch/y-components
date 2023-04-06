import { settings } from '../_utils/global';

export const getDomWidth = (el: Element) => {
  return el.clientWidth;
};

const hiddenItemCls = `${settings.prefix}-overflow-item-hidden`;

export const getOverflowItemWidth = (el: Element) => {
  if (!el) {
    console.warn('getOverflowItemWidth Warning: el is not defined');
    return 0;
  }
  const isHidden = el.classList.contains(hiddenItemCls);
  if (isHidden) {
    el.classList.remove(hiddenItemCls);
  }
  const width = getDomWidth(el);
  if (isHidden) {
    el.classList.add(hiddenItemCls);
  }
  return width;
};

export const calcVisibleCount = (
  rootWidth: number,
  restWidth: number,
  suffixWidth: number,
  prefixWidth: number,
  itemsLength: number,
  itemsSize: Record<number, number>,
): number => {
  if (restWidth >= rootWidth) {
    return 0;
  }
  let count = 0;
  let currentWidth = suffixWidth + prefixWidth;
  for (let i = 0; i < itemsLength; i++) {
    const element = itemsSize[i];
    const w = element || 0;
    if (w + currentWidth >= rootWidth) {
      break;
    }
    if (i > 0 && i < itemsLength - 1 && currentWidth + w + restWidth >= rootWidth) {
      break;
    }
    count += 1;
    currentWidth += w;
  }
  return count;
};
