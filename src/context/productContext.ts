import { createContext, Dispatch } from 'react';
import { Action } from '../components/reducer/productReducer';

const initialState: ProductInitialStateType = {
  wishlist: [],
};

const ProductContext = createContext<{
  state: ProductInitialStateType;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export default ProductContext;
