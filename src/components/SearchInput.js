import React from 'react';
import styled from 'styled-components';
import SearchView from './SearchView';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

const SearchInput = ({ keyword, results, updateField, setKeyword, setResults }) => {
  const onDeleteContent = () => {
    setKeyword('');
    setResults([]);
  };

  const iconStyle = {
    fontSize: '1.5rem',
    opacity: 0.5,
  };

  return (
    <>
      <SearchWrap>
        <SearchBar
          placeholder='브랜드명 또는 영양제 이름 검색'
          value={keyword || ''}
          onChange={(e) => updateField('keyword', e.target.value)}
        />
        <SearchIconWrap onClick={onDeleteContent}>
          {keyword ? <CloseOutlined style={iconStyle} /> : <SearchOutlined style={iconStyle} />}
        </SearchIconWrap>
      </SearchWrap>
      <SearchView renderResults={results} />
    </>
  );
};

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const SearchBar = styled.input`
  width: 20rem;
  padding: 12px 4px;
  font-size: 18px;
  border-bottom: 1px solid #000;
`;

const SearchIconWrap = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export default SearchInput;
