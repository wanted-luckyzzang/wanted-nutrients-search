import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';

const SearchInput = ({ keyword, onSearch, setKeyword, setResults }) => {
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

  const onDeleteContent = () => {
    setKeyword('');
    setResults([]);
  };

  return (
    <SearchInputWrap>
      <SearchIcon keyword={keyword} onDeleteContent={onDeleteContent} />
      <SearchBar placeholder='브랜드명 또는 영양제 이름 검색' value={keyword} onChange={handleChange} autoFocus />
    </SearchInputWrap>
  );
};

const SearchInputWrap = styled.div`
  ${({ theme }) => theme.flex.hCenter}
  position: relative;
`;

const SearchBar = styled.input`
  width: 23rem;
  padding: 0.75rem 0.25rem;
  font-size: 1.125rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.default};
`;

export default SearchInput;
