import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchInput from './SearchInput';
import SearchView from './SearchView';
import { PRODUCT_NAME, BRAND_NAME } from 'utils/constants/string';

const SearchContainer = () => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    (async function getData() {
      const response = await axios.get('http://localhost:8000/data');
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
    keyword = keyword.toString().toLowerCase().replace(/\s/gi, '');

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
      {keyword.length <= 0 && (
        <ContentWrap>
          궁금하신 영양제의 <br />
          브랜드명과 제품명을
          <br />
          입력해주세요.
        </ContentWrap>
      )}
      <SearchWrap top={keyword}>
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
  padding: 2rem 0;
  border-radius: 0.125rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0.625rem 2.25rem 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.0625rem;
`;

const ContentWrap = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5em;
  padding: 1rem 5rem;
  margin-right: auto;
`;

const SearchWrap = styled.div`
  position: fixed;
  top: ${(props) => (props.top ? '5rem' : '13rem')};
  ${({ theme }) => theme.flex.hCenter}
`;

export default SearchContainer;
