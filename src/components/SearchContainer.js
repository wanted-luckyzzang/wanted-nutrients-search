import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { SearchInput, SearchView } from './';
import { getApi, inputToAlpha } from 'utils';
import { HANGUL_INPUT, PRODUCT_NAME, BRAND_NAME } from 'utils/constants';

const SearchContainer = () => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    (async function getData() {
      const response = await getApi();
      setData(response.data);
    })();
  }, []);

  useEffect(() => {
    if (!keyword) {
      setKeyword('');
      setResults([]);
    }
  }, [keyword]);

  const matchName = useCallback((name, keyword) => {
    if (keyword === '') return false;
    name = name.toLowerCase();
    keyword = keyword.toString().toLowerCase();

    HANGUL_INPUT.forEach((hangul) => {
      // 비타민의 '비'가 'B'로 인식되는 것 방지
      if (keyword.includes(hangul) && keyword !== '비타민') {
        keyword = inputToAlpha[hangul].toLowerCase();
      }
    });

    if (keyword.includes(' ')) {
      let keywordRes = keyword.split(' ');
      return keywordRes.every((piece) => name.includes(piece));
    }

    return name.includes(keyword);
  }, []);

  const onSearch = useCallback(
    (text) => {
      let resultData = data.filter(
        (item) => true === matchName(item[PRODUCT_NAME], text) || (item[BRAND_NAME] !== null && true === matchName(item[BRAND_NAME], text))
      );
      setResults(resultData);
    },
    [data, matchName]
  );

  return (
    <Container>
      <SearchWrap>
        <SearchInput keyword={keyword} onSearch={onSearch} setKeyword={setKeyword} setResults={setResults} />
      </SearchWrap>
      <SearchView renderResults={results} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 30rem;
  height: 40rem;
  background: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.flex.column}
  align-items: center;
  padding: 2rem 0;
  border-radius: 0.125rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0.625rem 2.25rem 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.0625rem;
`;

const SearchWrap = styled.div`
  position: fixed;
  top: 5rem;
  ${({ theme }) => theme.flex.hCenter}
`;

export default SearchContainer;
