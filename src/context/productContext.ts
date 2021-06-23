import { createContext, Dispatch } from 'react';
import { Action } from '../reducer/ProductReducer';

export const productInitState: ProductInitStateType = {
  wishlist: [],
};

const productContext = createContext<{
  state: ProductInitStateType;
  dispatch: Dispatch<Action>;
}>({ state: productInitState, dispatch: () => null });

export default productContext;
