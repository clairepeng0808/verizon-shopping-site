import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import device from '../../utils/mediaUtil';

interface WishlistItemProps {
  productInfo: ProductInfoType;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ productInfo }) => {
  return (
    <ItemWrapper>
      <ProductImage imageUrl={productInfo.images[0]} />
      <ProductInfo>
        <ProductImageTitle>{productInfo.title}</ProductImageTitle>
        <ProductPrice>${productInfo.price}</ProductPrice>
      </ProductInfo>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 15px;
  &:hover {
    cursor: pointer;
  }
  ${device.sm} {
    gap: 5px;
  }
`;

const ProductImage = styled.div<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 80px;
  width: 80px;
  ${device.sm} {
    height: 60px;
    width: 60px;
  }
`;

const ProductInfo = styled.div`
  flex: 1 2 auto;
  margin-left: 15px;
  ${device.sm} {
    margin-left: 5px;
  }
`;

const ProductImageTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  ${device.sm} {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const ProductPrice = styled.p`
  color: ${palette.primary};
  text-align: bottom;
  ${device.sm} {
    font-size: 14px;
  }
`;

export default WishlistItem;
