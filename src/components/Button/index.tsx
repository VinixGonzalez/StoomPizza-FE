import React from "react";

import { StoomButton } from "./styles";

interface StoomButtonProps {
  text: string;
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  title?: string;
  secondary?: boolean;
}

export const Button: React.FC<StoomButtonProps> = ({
  text,
  type,
  onClick,
  disabled,
  title,
  secondary,
}) => {
  return (
    <StoomButton
      title={title}
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
      secondary={secondary}
    >
      {text}
    </StoomButton>
  );
};
