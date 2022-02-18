import React from 'react';
import styled from 'styled-components';
import { PRODUCT_NAME, BRAND_NAME } from 'utils/constants/jsonKey';

const SearchView = ({ renderResults }) => {
  return (
    <SearchViewContainer>
      {renderResults.map((item, idx) => (
        <SearchViewWrap key={idx}>
          {item[BRAND_NAME] !== null && <BrandName>{item[BRAND_NAME]}</BrandName>}
          <ProductName>{item[PRODUCT_NAME]}</ProductName>
        </SearchViewWrap>
      ))}
    </SearchViewContainer>
  );
};

const SearchViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.5rem;
  width: 25rem;
  height: 30rem;
  overflow-y: auto;
`;

const SearchViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.borderGrey};
  padding: 1.5rem 0;
  cursor: pointer;
`;

const BrandName = styled.p`
  height: 1.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.textGrey};
`;

const ProductName = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.color.default};
`;

export default React.memo(SearchView);
