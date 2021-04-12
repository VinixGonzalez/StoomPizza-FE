import { StepsContext } from "contexts/stepsContext";
import React, { useContext } from "react";
import { StepContainer, PizzaDoughType } from "./styles";
import { Button, Text } from "components";
import { ORDER_STEPS } from "utils/constants";
import { ContentContainer, GlobalFlexContainer } from "styles";

interface PizzaDoughChoosedProps {
  id: number;
  name: string;
  description: string;
}

export const Step2: React.FC = () => {
  const {
    currentStep,
    pizzaData,
    dough,
    setPromoOrder,
    changeStep,
    setChoosedDough,
  } = useContext(StepsContext);

  const handleChooseDough = (dough: PizzaDoughChoosedProps) => {
    setChoosedDough(dough);
    setPromoOrder(false);
    changeStep(ORDER_STEPS.STEP3);
  };

  return (
    <StepContainer currentStep={currentStep}>
      <Text
        as="h2"
        displayText="Escolha o tipo de massa da sua pizza!"
        align="center"
        color="var(--red-primary)"
        weight={700}
      />
      {pizzaData.doughTypes.map((doughType: PizzaDoughChoosedProps) => (
        <PizzaDoughType
          doughChoosed={dough?.id === doughType.id}
          key={doughType.id}
        >
          <GlobalFlexContainer align="center">
            <ContentContainer gap={10}>
              <Text
                as="p"
                displayText={doughType.name}
                color="var(--red-primary)"
                size="normal"
                font="Dancing Script"
              />
              <Text
                as="p"
                displayText={doughType.description}
                color="var(--text-primary)"
              />
            </ContentContainer>
            {dough?.id === doughType.id ? (
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
                onClick={() => handleChooseDough(doughType)}
              />
            )}
          </GlobalFlexContainer>
        </PizzaDoughType>
      ))}
      <ContentContainer>
        <Button
          disabled={!!!dough}
          text="Avançar"
          onClick={() => changeStep(ORDER_STEPS.STEP3)}
        />
        <Button
          text="Voltar"
          secondary
          onClick={() => changeStep(ORDER_STEPS.STEP1)}
        />
      </ContentContainer>
    </StepContainer>
  );
};
