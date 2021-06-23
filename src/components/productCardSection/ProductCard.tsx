/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { faStar, faStarHalf, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import palette from '../styles/palette';
import Icon from '../common/Icon';
import { mediaQueryString } from '../../utils/mediaUtil';
import ProductContext from '../../context/productContext';
import ImageSlider from '../common/ImageSlider';

interface ProductProps {
  key: string;
  productInfo: ProductInfoType;
}

const ProductCard: React.FC<ProductProps> = ({ productInfo }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [ratingStarList, setRatingStarList] = useState<JSX.Element[]>([]);
  const [followIcon, setFollowIcon] = useState<JSX.Element | null>(null);
  const { state: productState, dispatch } = useContext(ProductContext);
  const { wishlist } = productState;

  const onToggleFollow = () => {
    setIsFollowed(!isFollowed);
  };

  useEffect(() => {
    const renderRatingStars = (id: string, ratings: number) => {
      let starList: JSX.Element[] = [];
      for (let i = 0; i < Math.trunc(ratings); i++) {
        starList.push(
          <Icon
            key={`rating-star-${i}-${id}`}
            icon={faStar}
            size="xs"
            color={palette.gold}
          />
        );
      }
      if (!Number.isInteger(ratings)) {
        starList.push(
          <Icon
            key={`rating-halfstar-${id}`}
            icon={faStarHalf}
            size="xs"
            color={palette.gold}
          />
        );
      }
      return starList;
    };
    setRatingStarList(renderRatingStars(productInfo.id, productInfo.ratings));
  }, []);

  useEffect(() => {
    const FollowIcon = () => (
      <Icon
        icon={isFollowed ? faHeart : faRegularHeart}
        color={palette.primary}
        onClick={onToggleFollow}
      />
    );
    setFollowIcon(FollowIcon);
  }, [isFollowed]);

  useEffect(() => {
    if (isFollowed) {
      if (
        !wishlist.find(
          (product: ProductInfoType) => product.id === productInfo.id
        )
      )
        dispatch({ type: 'ADD_TO_WISH_LIST', product: productInfo });
    } else {
      if (
        wishlist.find(
          (product: ProductInfoType) => product.id === productInfo.id
        )
      ) {
        dispatch({ type: 'REMOVE_FROM_WISH_LIST', id: productInfo.id });
      }
    }
  }, [isFollowed]);

  return (
    <CardContainer>
      <ImageSlider images={productInfo.images} />
      <ProductInfo>
        <ProductTitle>${productInfo.title}</ProductTitle>
        <ProductPrice>${productInfo.price}</ProductPrice>
        <ProductRatings>{ratingStarList}</ProductRatings>
        <AddToWishList>{followIcon}</AddToWishList>
      </ProductInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 10px;
  max-width: 230px;
  border: 1px solid ${palette.gray};
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  ${mediaQueryString(522)} {
    max-width: 280px;
  }
  &:hover {
    transition: all ease-in-out 0.3s;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
  }
`;

const ProductInfo = styled.div`
  padding: 10px 10px;
  font-size: 20px;
`;

const ProductTitle = styled.h5`
  margin: 10px 0;
  font-weight: 500;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: ${palette.darkGray};
`;

const ProductRatings = styled.div`
  margin: 10px 0;
`;

const AddToWishList = styled.div`
  margin: 10px 5px 5px 0;
  text-align: right;
  transition: all ease-in-out 0.3s;
  &:focus {
    transition: all ease-in-out 0.3s;
  }
`;

export default React.memo(ProductCard);
