export type Action =
  | { type: 'ADD_TO_WISH_LIST'; product: ProductInfoType }
  | { type: 'REMOVE_FROM_WISH_LIST'; id: string };

const ProductReducer = (state: ProductInitStateType, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_WISH_LIST':
      return {
        wishlist: [...state.wishlist, action.product],
      };
    case 'REMOVE_FROM_WISH_LIST':
      return {
        wishlist: state.wishlist.filter((product) => product.id !== action.id),
      };
    default:
      return state;
  }
};

export default ProductReducer;
