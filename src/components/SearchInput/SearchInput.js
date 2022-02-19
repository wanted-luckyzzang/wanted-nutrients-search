import React, { useEffect, useCallback, useRef } from 'react';
import { SearchIcon } from 'utils';
import * as S from './CSS/InputStyle';

export const SearchInput = ({ keyword, onSearch, setKeyword, setResults, setFirst }) => {
  const inputRef = useRef(null);

  const handleChange = useCallback(
    (e) => {
      setKeyword(e.target.value);
    },
    [setKeyword]
  );

  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(keyword);
    }, 500);
    return () => clearTimeout(debounce);
  }, [keyword, onSearch]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onDeleteContent = useCallback(() => {
    setKeyword('');
    setResults([]);
    inputRef.current.focus();
    setFirst(true);
  }, [setKeyword, setResults, setFirst]);

  return (
    <S.SearchInputWrap>
      <SearchIcon keyword={keyword} onDeleteContent={onDeleteContent} />
      <S.SearchBar ref={inputRef} placeholder='브랜드명 또는 영양제 이름 검색' value={keyword} onChange={handleChange} />
    </S.SearchInputWrap>
  );
};
