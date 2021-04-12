import React, { useContext, useEffect } from "react";
import { CheckoutContainer } from "styles/checkout";
import { Card, Text } from "components";
import { ContentContainer, GlobalFlexContainer } from "styles";
import { StepsContext } from "contexts/stepsContext";
import { useRouter } from "next/router";
import Confetti from "react-confetti";

const Checkout: React.FC = () => {
  const router = useRouter();
  const { size, isPromoOrder } = useContext(StepsContext);

  useEffect(() => {
    if (!size) {
      router.push("/");
    }
  }, [router]);

  return (
    <ContentContainer mt={-50}>
      <GlobalFlexContainer padding="global" justify="center">
        {size ? (
          <>
            <Confetti
              recycle={false}
              width={window.innerWidth}
              height={window.innerHeight}
            />
            <Card>
              <GlobalFlexContainer
                justify="center"
                align="center"
                direction="column"
                gap={25}
              >
                <Text
                  as="h1"
                  displayText="Pedido finalizado com sucesso! 🍕"
                  font="Dancing Script"
                  size="lg"
                  color="var(--red-primary)"
                />
                <Text
                  as="h2"
                  align="center"
                  displayText="Muito obrigado por pedir conosco 😍"
                  font="Dancing Script"
                  size="normal"
                  color="var(--red-primary)"
                />
                <Text
                  as="h3"
                  align="center"
                  displayText="Seu pedido será preparado com todo 💖"
                  font="Dancing Script"
                  size="md"
                  color="var(--red-primary)"
                />
                {isPromoOrder && (
                  <Text
                    as="h3"
                    align="center"
                    displayText="Você ganhou + 10 pontos!"
                    font="Maven Pro"
                    size="md"
                    color="var(--red-primary)"
                  />
                )}
              </GlobalFlexContainer>
            </Card>
          </>
        ) : (
          <GlobalFlexContainer direction="column" align="center">
            <img height={160} src="/images/pizza_loading.gif" alt="loading" />
            <Text
              as="p"
              size="normal"
              displayText="Carregando..."
              font="Dancing Script"
              color="var(--red-primary)"
            />
          </GlobalFlexContainer>
        )}
      </GlobalFlexContainer>
    </ContentContainer>
  );
};

export default Checkout;
