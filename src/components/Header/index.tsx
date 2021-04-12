import React, { useEffect } from "react";
import { useScrollHandler } from "hooks";
import { HeaderContent } from "./styles";
import { Text } from "components";

export const Header: React.FC = () => {
  const { isScrollOnTop, scrollPos } = useScrollHandler();

  return (
    <HeaderContent>
      <Text
        font="Dancing Script"
        as="h1"
        displayText="Stoom Pizza"
        color="#fff"
        size="xx"
        align="center"
      />
    </HeaderContent>
  );
};
