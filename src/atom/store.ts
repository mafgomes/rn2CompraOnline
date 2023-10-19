import {ItemProps} from '@shared/types/itemTypes';
import {atom} from 'jotai';
export const cartQuantity = atom<number>(0);
export const cartItems = atom<ItemProps[]>([]);

export const cartTotalQuantity = atom(get => {
  const items = get(cartItems);
  const totalQuantity = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );
  return totalQuantity;
});

export const cartTotal = atom(get => {
  const items = get(cartItems);
  const totalValue = items.reduce((total, item) => {
    const itemValue = (item.price || 0) * (item.quantity || 0);
    return total + itemValue;
  }, 0);
  return totalValue;
});
