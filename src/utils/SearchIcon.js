import React from 'react';
import styled from 'styled-components';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { CLOSE_STYLE, SEARCH_STYLE } from 'utils/constants';

export const SearchIcon = ({ keyword, onDeleteContent }) => {
  return (
    <SearchIconWrap onClick={onDeleteContent}>
      {keyword ? <CloseOutlined style={CLOSE_STYLE} /> : <SearchOutlined style={SEARCH_STYLE} />}
    </SearchIconWrap>
  );
};

const SearchIconWrap = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  cursor: pointer;
`;
