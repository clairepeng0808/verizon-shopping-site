import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import ContentContainer from '../containers/ContentContainer';
import ProductCardSection from '../components/productCardSection/ProductCardSection';
import ProductContext from '../context/ProductContext';
import ProductReducer from '../reducer/ProductReducer';
import Modal from '../components/common/Modal';
import { FullWidthButton } from '../components/common/Button';
import Wishlist from '../components/wishlist/Wishlist';
import { productInitState } from '../context/ProductContext';

const ProductPage: React.FC = () => {
  const [state, dispatch] = useReducer(ProductReducer, productInitState);
  const [showWishList, setShowWishlist] = useState(false);
  const { wishlist } = state;

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <ContentContainer>
        <ProductCardSection />
        <WishListButton
          onClick={() => setShowWishlist(true)}
          empty={wishlist.length === 0}
        >
          {wishlist.length} Products in Wishlist
        </WishListButton>
      </ContentContainer>
      <Modal show={showWishList} onClose={() => setShowWishlist(false)}>
        <Wishlist list={wishlist} />
      </Modal>
    </ProductContext.Provider>
  );
};

const WishListButton = styled(FullWidthButton)`
  z-index: 99;
`;

export default React.memo(ProductPage);
