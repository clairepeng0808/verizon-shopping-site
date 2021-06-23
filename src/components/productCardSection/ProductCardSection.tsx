import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import productData from '../../static/productData.json';

const ProductCardSection: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Top Products</SectionTitle>
      <ProductWrapper>
        {productData.map((product: any) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
      </ProductWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin: 30px 0;
`;

export default React.memo(ProductCardSection);
