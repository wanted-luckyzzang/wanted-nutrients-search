import React from "react";
import styled from "styled-components";

export const FirstGuide = () => {
  return (
    <GuideWrap>
      <p>키워드가 여러 개일 경우</p>
      <p>
        <span>공백(space)</span>을 두고 입력해주세요 (∗❛ᴗ❛∗)
      </p>
    </GuideWrap>
  );
};

export const NoResultGuide = () => {
  return (
    <GuideWrap>
      <p>검색결과가 없어요! ʕ •̀ o •́ ʔ</p>
    </GuideWrap>
  );
};

const GuideWrap = styled.div`
  ${({ theme }) => theme.flex.column}
  align-items: center;
  margin-top: 12rem;
  color: ${({ theme }) => theme.color.textGrey};

  & p:first-child {
    margin-bottom: 1rem;
  }
`;
