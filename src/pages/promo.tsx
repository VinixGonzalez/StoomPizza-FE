import React, { useContext, useEffect } from "react";
import { CheckoutContainer } from "styles/checkout";
import { Card, Text } from "components";
import { ContentContainer, GlobalFlexContainer } from "styles";
import { StepsContext } from "contexts/stepsContext";
import { useRouter } from "next/router";

const Promo: React.FC = () => {
  const router = useRouter();

  return (
    <ContentContainer mt={-50}>
      <GlobalFlexContainer justify="center">
        <Card>
          <Text
            as="h2"
            align="center"
            displayText="Muito obrigado por pedir conosco 😍"
            font="Dancing Script"
            size="normal"
            color="var(--red-primary)"
          />
        </Card>
      </GlobalFlexContainer>
    </ContentContainer>
  );
};

export default Promo;
