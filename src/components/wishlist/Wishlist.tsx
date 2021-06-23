import React from 'react';
import WishlistItem from './WishlistItem';
import { ReactComponent as Emptywishlist } from '../../assets/empty_wishlist.svg';
import styled from 'styled-components';
import device from '../../utils/mediaUtil';

interface WishlistProps {
  list: Array<ProductInfoType>;
}

const Wishlist: React.FC<WishlistProps> = ({ list }) => {
  console.log();
  if (list.length === 0) {
    return (
      <ContentWrapper>
        <EmptyWishlistIcon className="logo" />
        <EmptyText>
          Your wishlist is still empty. Go add some items to it!
        </EmptyText>
      </ContentWrapper>
    );
  }
  return (
    <>
      {list.map((product) => (
        <WishlistItem key={product.id} productInfo={product} />
      ))}
    </>
  );
};

const ContentWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const EmptyWishlistIcon = styled(Emptywishlist)`
  width: 300px;
  height: 300px;
  ${device.sm} {
    width: 200px;
    height: 250px;
  }
`;

const EmptyText = styled.p`
  font-size: 16px;
  ${device.sm} {
    font-size: 14px;
  }
`;

export default Wishlist;
