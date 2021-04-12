import styled, { css } from "styled-components";

interface StoomButtonProps {
  secondary?: boolean;
}

export const StoomButton = styled.button<StoomButtonProps>`
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  background: rgb(255, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 0, 0, 0.9) 0%,
    rgba(255, 76, 0, 0.7) 100%
  );
  color: #fff;
  font-family: "Maven Pro";
  font-size: 1rem;
  text-transform: uppercase;
  width: 100%;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }

  ${(props) =>
    props.secondary &&
    css`
      border: 1px solid var(--red-primary);
      background: transparent;
      color: var(--red-primary);
    `}
`;
