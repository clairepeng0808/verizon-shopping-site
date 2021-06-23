type ImagesTypes = Array<string>;

type TransitionStatetType =
  | 'entering'
  | 'entered'
  | 'exiting'
  | 'exited'
  | 'unmounted';

type ProductInfoType = {
  id: string;
  images: ImagesTypes;
  title: string;
  price: number;
  ratings: number;
};

type ProductInitialStateType = {
  wishlist: Array<ProductInfoType>;
};
