import styled, { css } from "styled-components";

interface HeaderContentProps {
  scrollPos?: number;
  isScrollOnTop?: boolean;
}

export const HeaderContent = styled.header<HeaderContentProps>`
  min-height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 0, 0, 0.9) 0%,
    rgba(255, 76, 0, 0.7) 100%
  );

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;
