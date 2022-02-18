import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchInput from './SearchInput';

const SearchContainer = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const PRODUCT_NAME = '제품명';
  const BRAND_NAME = '브랜드명';

  useEffect(() => {
    (async function getData() {
      const response = await axios.get('http://localhost:8000/data');
      console.log(response.data);
      setData(response.data);
    })();
  }, []);

  const updateField = (field, value, update = true) => {
    if (update && value.length >= 2) onSearch(value);

    if (!value) {
      setKeyword('');
      setResults([]);
    }

    if (field === 'keyword') setKeyword(value);
    if (field === 'results') setResults(value);
  };

  // onSearch 함수를 부를 때마다 매번 선언되지 않도록 함수 바깥에 선언
  let resultData;

  const onSearch = (text) => {
    resultData = data.filter((item) => true === matchName(item[PRODUCT_NAME], text));
    console.log(resultData);
    setResults(resultData);
  };

  const matchName = (name, keyword) => {
    if (keyword === '') return false;
    keyword = keyword.toString().toLowerCase();
    return name.includes(keyword);
  };

  return (
    <Container>
      <ContentWrap>
        궁금하신 영양제의 <br />
        브랜드명과 제품명을
        <br />
        입력해주세요.
      </ContentWrap>
      <SearchWrap>
        <SearchInput keyword={keyword} results={results} updateField={updateField} setKeyword={setKeyword} setResults={setResults} />
      </SearchWrap>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 30rem;
  height: 40rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 2rem 3rem;
  border-radius: 2px;
  overflow: scroll;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const ContentWrap = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5em;
`;

const SearchWrap = styled.div`
  width: 100%;
`;

export default SearchContainer;
