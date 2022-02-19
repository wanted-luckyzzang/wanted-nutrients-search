import styled from 'styled-components';

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

export { SearchInputWrap, SearchBar };
