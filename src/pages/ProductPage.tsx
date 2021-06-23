import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/containers/ContentContainer';
import ProductCardSection from '../components/productCardSection/ProductCardSection';
import ProductContext from '../context/productContext';
import ProductReducer from '../components/reducer/productReducer';
import Modal from '../components/common/Modal';
import { FullWidthButton } from '../components/common/Button';
import Wishlist from '../components/wishlist/Wishlist';

const ProductPage: React.FC = () => {
  const [state, dispatch] = useReducer(ProductReducer, { wishlist: [] });
  const [showWishList, setShowWishlist] = useState(false);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <ContentContainer>
        <ProductCardSection />
        <WishListButton
          onClick={() => setShowWishlist(true)}
          empty={state.wishlist.length === 0}
        >
          {state.wishlist.length} Products in Wishlist
        </WishListButton>
      </ContentContainer>
      <Modal show={showWishList} onClose={() => setShowWishlist(false)}>
        <Wishlist list={state.wishlist} />
      </Modal>
    </ProductContext.Provider>
  );
};

const WishListButton = styled(FullWidthButton)`
  z-index: 99;
`;

export default React.memo(ProductPage);
