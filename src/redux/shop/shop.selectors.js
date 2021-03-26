import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);
