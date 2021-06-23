type TransitionStatetType =
  | 'entering'
  | 'entered'
  | 'exiting'
  | 'exited'
  | 'unmounted';

type ProductInfoType = {
  id: string;
  images: Array<string>;
  title: string;
  price: number;
  discount?: string;
  ratings: number;
};

type ProductInitStateType = {
  wishlist: Array<ProductInfoType>;
};
