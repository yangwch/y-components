import { settings } from '../_utils/global';

export const getDomWidth = (el: Element) => {
  return el.clientWidth;
};

const hiddenItemCls = `${settings.prefix}-overflow-item-hidden`;

const getOverflowItemWidth = (el: Element) => {
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
  itemsLength: number,
  domsData: Record<number, Element>,
): number => {
  if (restWidth >= rootWidth) {
    return 0;
  }
  let count = 0;
  let currentWidth = restWidth;
  for (let i = 0; i < itemsLength; i++) {
    const element = domsData[i];
    if (element) {
      const w = getOverflowItemWidth(element);
      if (w + currentWidth >= rootWidth) {
        break;
      }
      count += 1;
      currentWidth += w;
    }
  }
  return count;
};
