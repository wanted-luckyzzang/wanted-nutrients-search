import React from 'react';
import styled from 'styled-components';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { CLOSE_STYLE, SEARCH_STYLE } from 'utils/constants/inputBtnStyle';

const SearchInput = ({ keyword, updateField, setKeyword, setResults }) => {
  const onDeleteContent = () => {
    setKeyword('');
    setResults([]);
  };

  return (
    <SearchWrap>
      <SearchBar placeholder='브랜드명 또는 영양제 이름 검색' value={keyword || ''} onChange={(e) => updateField(e.target.value)} />
      <SearchIconWrap onClick={onDeleteContent}>
        {keyword ? <CloseOutlined style={CLOSE_STYLE} /> : <SearchOutlined style={SEARCH_STYLE} />}
      </SearchIconWrap>
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  ${({ theme }) => theme.flex.hCenter}
  position: relative;
`;

const SearchBar = styled.input`
  width: 23rem;
  padding: 0.75rem 0.25rem;
  font-size: 1.125rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.default};
`;

const SearchIconWrap = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  cursor: pointer;
`;

export default SearchInput;
