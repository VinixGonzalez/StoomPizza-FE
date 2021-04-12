import { StepsContext } from "contexts/stepsContext";
import React, { useContext } from "react";
import { StepContainer, PizzaSize } from "./styles";
import { Button, Text } from "components";
import { ORDER_STEPS } from "utils/constants";
import { ContentContainer, GlobalFlexContainer } from "styles";

interface PizzaSizeChoosedProps {
  id: number;
  name: string;
  price: number;
}

export const Step3: React.FC = () => {
  const {
    currentStep,
    pizzaData,
    size,
    changeStep,
    setChoosedSize,
    setPromoOrder,
    isPromoOrder,
  } = useContext(StepsContext);

  const handleChooseDough = (size: PizzaSizeChoosedProps) => {
    setPromoOrder(false);
    setChoosedSize(size);
  };

  return (
    <StepContainer currentStep={currentStep}>
      <Text
        as="h2"
        displayText="Escolha o tamanho da pizza!"
        align="center"
        color="var(--red-primary)"
        weight={700}
      />
      {pizzaData.sizes.map((pizzaSize: PizzaSizeChoosedProps) => (
        <PizzaSize sizeChoosed={size?.id === pizzaSize.id} key={pizzaSize.id}>
          <GlobalFlexContainer align="center">
            <ContentContainer gap={10}>
              <Text
                size="normal"
                font="Dancing Script"
                as="p"
                displayText={pizzaSize.name}
                color="var(--red-primary)"
              />
              <Text
                as="p"
                displayText={new Intl.NumberFormat("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                }).format(pizzaSize.price)}
              />
            </ContentContainer>
            {size?.id === pizzaSize.id ? (
              <ContentContainer>
                <Text
                  as="p"
                  align="center"
                  displayText="Escolhido! ✔"
                  weight={500}
                />
              </ContentContainer>
            ) : (
              <Button
                text="Escolher"
                title="Escolha o tamanho da massa para avançar"
                onClick={() => handleChooseDough(pizzaSize)}
              />
            )}
          </GlobalFlexContainer>
        </PizzaSize>
      ))}
      <ContentContainer>
        <Button
          text="Voltar"
          secondary
          onClick={() => changeStep(ORDER_STEPS.STEP2)}
        />
      </ContentContainer>
    </StepContainer>
  );
};
