import React, { useContext } from "react";
import { Button, Card, Text } from "components";
import { StepsContext } from "contexts/stepsContext";
import { ContentContainer, GlobalFlexContainer } from "styles";
import { useRouter } from "next/router";

export const OrderDetails: React.FC = () => {
  const router = useRouter();
  const { size, flavor, dough, isPromoOrder, pizzaData } = useContext(
    StepsContext
  );

  const handleNewOrder = () => {
    // Lógica para enviar os dados para a API e criar um novo pedido

    router.push("/checkout");
  };

  return (
    <Card>
      {flavor ? (
        <>
          <ContentContainer mb={25}>
            <Text
              align="center"
              font="Dancing Script"
              size="md"
              color="var(--red-primary)"
              as="h2"
              displayText="Informações do pedido"
            />
          </ContentContainer>
          <GlobalFlexContainer gap={10} align="center">
            <Text as="p" displayText="Sabor: " />
            <Text
              color="var(--text-primary)"
              as="h3"
              displayText={flavor ? flavor.name : "-"}
            />
          </GlobalFlexContainer>
          <GlobalFlexContainer gap={10} align="center">
            <Text as="p" displayText="Massa: " />
            <Text
              color="var(--text-primary)"
              as="h3"
              displayText={dough ? dough.name : "-"}
            />
          </GlobalFlexContainer>
          <GlobalFlexContainer gap={10} align="center">
            <Text as="p" displayText="Tamanho: " />
            <Text
              color="var(--text-primary)"
              as="h3"
              displayText={size ? size.name : "-"}
            />
          </GlobalFlexContainer>
          <GlobalFlexContainer gap={10} align="center">
            <Text as="p" displayText="Total: " />
            <Text
              color="var(--text-primary)"
              as="h3"
              displayText={
                size
                  ? new Intl.NumberFormat("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    }).format(
                      isPromoOrder ? pizzaData?.promoDay.price : size.price
                    )
                  : "-"
              }
            />
          </GlobalFlexContainer>
          {isPromoOrder && (
            <ContentContainer mt={25}>
              <Text
                align="center"
                as="p"
                displayText={`Você vai ganhar ${pizzaData?.promoDay.points} pontos!`}
              />
            </ContentContainer>
          )}
          <ContentContainer mt={25}>
            <Button
              disabled={!!!size}
              text="Confirmar Pedido!"
              title="Selecione um tamanho para finalizar o pedido"
              onClick={handleNewOrder}
            />
          </ContentContainer>
        </>
      ) : (
        <Text
          font="Dancing Script"
          color="var(--red-primary)"
          size="normal"
          as="h2"
          displayText="Faça seu pedido!"
          align="center"
        />
      )}
    </Card>
  );
};
