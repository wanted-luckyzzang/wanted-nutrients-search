import React from 'react';
import { PRODUCT_NAME, BRAND_NAME } from 'utils/constants';
import * as S from './CSS/ViewStyle';

const SearchView = ({ renderResults }) => {
  return (
    <S.SearchViewContainer>
      {renderResults.map((item, idx) => (
        <S.SearchViewWrap key={idx}>
          {item[BRAND_NAME] !== null && <S.BrandName>{item[BRAND_NAME]}</S.BrandName>}
          <S.ProductName>{item[PRODUCT_NAME]}</S.ProductName>
        </S.SearchViewWrap>
      ))}
    </S.SearchViewContainer>
  );
};

export default React.memo(SearchView);
