import React from "react";
import { Img, ImgContainer } from "./styles";

interface AvatarProps {
  src: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <ImgContainer>
      <Img src={src} alt="avatar img" />
    </ImgContainer>
  );
};
