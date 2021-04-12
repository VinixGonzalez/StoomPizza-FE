import React, { useContext } from "react";
import { Card, Text } from "components";
import { Step1, Step2, Step3 } from "components/Steps";
import { StepsContext } from "contexts/stepsContext";
import { ContentContainer } from "styles/home";

export const OrderSteps: React.FC = () => {
  const { currentStep } = useContext(StepsContext);

  const _setCurrentStep = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return step;
    }
  };

  return (
    <Card>
      <ContentContainer mb={25}>
        <Text as="small" displayText={`Passo ${currentStep} de 3`} />
      </ContentContainer>
      {_setCurrentStep(currentStep)}
    </Card>
  );
};
