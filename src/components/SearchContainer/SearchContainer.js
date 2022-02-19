import React, { useEffect, useState, useCallback } from 'react';
import { SearchInput, SearchView } from 'components';
import { getApi } from 'utils/hooks';
import { FirstGuide, NoResultGuide } from 'utils';
import { HANGUL_INPUT, INPUT_TO_ALPHA, PRODUCT_NAME, BRAND_NAME } from 'utils/constants';
import * as S from './CSS/ContainerStyle';

export const SearchContainer = () => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [first, setFirst] = useState(true);

  useEffect(() => {
    (async function getData() {
      const response = await getApi();
      setData(response.data);
    })();
  }, []);

  useEffect(() => {
    if (keyword) {
      setFirst(false);
    }
  }, [keyword, setFirst]);

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
        keyword = INPUT_TO_ALPHA[hangul].toLowerCase();
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
    <S.Container>
      <S.SearchWrap>
        <SearchInput keyword={keyword} onSearch={onSearch} setKeyword={setKeyword} setResults={setResults} setFirst={setFirst} />
      </S.SearchWrap>
      {first && <FirstGuide />}
      {!first && results.length > 0 ? <SearchView renderResults={results} /> : !first && <NoResultGuide />}
    </S.Container>
  );
};
