import { StepsContext } from "contexts/stepsContext";
import React, { useContext } from "react";
import { StepContainer, PizzaFlavor } from "./styles";
import { Content, ContentContainer, GlobalFlexContainer } from "styles/home";
import { Button, Text } from "components";
import { ORDER_STEPS } from "utils/constants";

interface PizzaFlavorChoosedProps {
  id: number;
  name: string;
  ingredients: string;
  picture: string;
}

export const Step1: React.FC = () => {
  const {
    currentStep,
    pizzaData,
    flavor,
    changeStep,
    setChoosedFlavor,
    setPromoOrder,
  } = useContext(StepsContext);

  const handleChooseFlavor = (pizza: PizzaFlavorChoosedProps) => {
    setChoosedFlavor(pizza);
    setPromoOrder(false);
    changeStep(ORDER_STEPS.STEP2);
  };

  return (
    <StepContainer currentStep={currentStep}>
      <Text
        as="h2"
        displayText="Escolha o sabor da sua pizza!"
        align="center"
        color="var(--red-primary)"
        weight={700}
      />
      {pizzaData.menu.pizzaList.map((pizza: PizzaFlavorChoosedProps) => (
        <PizzaFlavor flavorChoosed={flavor?.id === pizza.id} key={pizza.id}>
          <ContentContainer width={237}>
            <img src={pizza.picture} alt="pizza image" />
          </ContentContainer>
          <GlobalFlexContainer
            direction="column"
            justify="space-between"
            padding="0 0 0 5"
          >
            <Text
              as="p"
              displayText={pizza.name}
              font="Dancing Script"
              size="normal"
              color="var(--red-primary)"
              weight={700}
            />
            <Text
              as="p"
              displayText={pizza.ingredients}
              font="Maven Pro"
              size="sm"
              color="var(--text-primary)"
              weight={400}
            />
            {flavor?.id === pizza.id ? (
              <ContentContainer>
                <Text
                  as="p"
                  align="center"
                  color="#fff"
                  displayText="Escolhido! 🍕"
                  weight={500}
                />
              </ContentContainer>
            ) : (
              <Button
                text="Escolher"
                onClick={() => handleChooseFlavor(pizza)}
              />
            )}
          </GlobalFlexContainer>
        </PizzaFlavor>
      ))}

      <Button
        disabled={!!!flavor}
        text="Próximo"
        onClick={() => changeStep(ORDER_STEPS.STEP2)}
        title="Para avançar selecione um sabor"
      />
    </StepContainer>
  );
};
