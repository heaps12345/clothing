import { shopData } from './shop.data';

const initialState = {
  collections: shopData
};

export const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
