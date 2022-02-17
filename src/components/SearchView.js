import React from 'react';
import styled from 'styled-components';

const SearchView = ({ renderResults }) => {
  const PRODUCT_NAME = '제품명';
  const BRAND_NAME = '브랜드명';

  return (
    <SearchViewContainer>
      {renderResults.map((item, idx) => (
        <SearchViewWrap key={idx}>
          <BrandName>{item[BRAND_NAME]}</BrandName>
          <ProductName>{item[PRODUCT_NAME]}</ProductName>
        </SearchViewWrap>
      ))}
    </SearchViewContainer>
  );
};

const SearchViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f8f8f8;
`;

const BrandName = styled.p`
  font-size: 18px;
  color: #c1c0c2;
`;

const ProductName = styled.p`
  font-size: 20px;
  color: #000000;
`;

export default React.memo(SearchView);
