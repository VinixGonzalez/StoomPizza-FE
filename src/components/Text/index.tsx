import React from "react";
import CSS from "csstype";

import { Container } from "./styles";

interface TextProps {
  displayText: string;
  as:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "strong"
    | "small";
  size?: "sm" | "md" | "normal" | "lg" | "xx";
  font?: "Maven Pro" | "Dancing Script";
  color?: string;
  align?: "left" | "center" | "right";
  noWrap?: boolean;
  weight?: 400 | 500 | 700;
}

export const Text: React.FC<TextProps> = ({
  displayText,
  as,
  font,
  color,
  size,
  align,
  noWrap,
  weight,
}) => {
  const TextType = as;

  return (
    <Container
      font={font}
      color={color}
      size={size}
      align={align}
      noWrap={noWrap}
      weight={weight}
    >
      <TextType>{displayText}</TextType>
    </Container>
  );
};
