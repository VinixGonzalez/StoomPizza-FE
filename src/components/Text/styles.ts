import styled, { css } from "styled-components";

interface ContainerProps {
  font?: string;
  size?: "sm" | "md" | "normal" | "lg" | "xx";
  align?: "left" | "center" | "right";
  noWrap?: boolean;
  weight?: 400 | 500 | 700;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.noWrap &&
    css`
      white-space: nowrap;
    `}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  strong,
  small,
  p {
    font-weight: ${(props) => (props.weight ? props.weight : "normal")};
    font-family: ${(props) =>
      props.font ? props.font : "Maven Pro, sans-serif"};
    color: ${(props) => (props.color ? props.color : "#000")};
    text-align: ${(props) => (props.align ? props.align : "unset")};
    font-size: ${(props) =>
      props.size === "sm"
        ? "1rem"
        : props.size === "md"
        ? "1.5rem"
        : props.size === "normal"
        ? "2rem"
        : props.size === "lg"
        ? "3rem"
        : props.size === "xx" && "4rem"};
  }
`;
