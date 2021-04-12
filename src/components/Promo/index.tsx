import React, { useEffect, useContext } from "react";

import { Text, Card, Avatar, Button } from "components";
import { ContentContainer, GlobalFlexContainer } from "styles/home";
import { Img } from "./styles";
import { StepsContext } from "contexts/stepsContext";
import { ORDER_STEPS } from "utils/constants";

export const Promo: React.FC = () => {
  const {
    pizzaData,
    loading,
    changeStep,
    setChoosedFlavor,
    setChoosedDough,
    setChoosedSize,
    setPromoOrder,
  } = useContext(StepsContext);

  const handlePizzaPromo = () => {
    const { id, doughId, sizeId } = pizzaData?.promoDay;

    const flavorChoosed = pizzaData?.menu.pizzaList.find(
      (pizza) => pizza.id === id
    );
    const doughChoosed = pizzaData.doughTypes.find(
      (doughType) => doughType.id === doughId
    );
    const sizeChoosed = pizzaData.sizes.find((size) => size.id === sizeId);

    setChoosedFlavor(flavorChoosed);
    setChoosedDough(doughChoosed);
    setChoosedSize(sizeChoosed);

    setPromoOrder(true);

    changeStep(ORDER_STEPS.STEP3);
  };

  if (loading) {
    return (
      <GlobalFlexContainer direction="column" align="center">
        <Img src="/images/pizza_loading.gif" alt="loading" />
        <Text
          as="p"
          size="md"
          displayText="Carregando..."
          font="Dancing Script"
          color="var(--red-primary)"
        />
      </GlobalFlexContainer>
    );
  }

  return (
    <Card>
      {pizzaData ? (
        <>
          <Text
            as="h2"
            displayText={pizzaData?.promoDay.pizzaName}
            align="center"
            font="Dancing Script"
            size="normal"
            color="var(--red-primary)"
          />
          <Img src={pizzaData?.promoDay.picture} alt="promo picture" />
          <Text
            as="h3"
            displayText="Recomendação do dia!"
            align="center"
            font="Dancing Script"
            color="var(--red-primary)"
            size="md"
          />
          <ContentContainer mt={15}>
            <Text
              as="p"
              displayText={`Ganhe + ${pizzaData?.promoDay.points} pontos!`}
              align="center"
              font="Maven Pro"
              size="sm"
              color="var(--text-primary)"
              weight={500}
            />
            <Text
              as="p"
              displayText={`Por ${new Intl.NumberFormat("pt-BR", {
                currency: "BRL",
                style: "currency",
              }).format(pizzaData?.promoDay.price)}`}
              align="center"
              font="Maven Pro"
              size="sm"
              color="var(--red-primary)"
              weight={500}
            />
          </ContentContainer>
          <ContentContainer mt={15}>
            <Button text="Eu quero!" onClick={handlePizzaPromo} />
          </ContentContainer>
        </>
      ) : (
        <Text
          align="center"
          as="h3"
          displayText="Sem promoções"
          color="var(--red-primary)"
        />
      )}
    </Card>
  );
};
