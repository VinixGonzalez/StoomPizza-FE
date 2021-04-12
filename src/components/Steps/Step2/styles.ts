import styled, { css } from "styled-components";
import { ORDER_STEPS } from "utils/constants";

interface StepContainerProps {
  currentStep: number;
}

export const StepContainer = styled.div<StepContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 1300px) {
    gap: 50px;
  }
`;

interface PizzaDoughTypeProps {
  doughChoosed?: boolean;
}

export const PizzaDoughType = styled.div<PizzaDoughTypeProps>`
  ${(props) =>
    props.doughChoosed &&
    css`
      background-color: var(--red-primary);
      border-radius: 1rem;
      padding: 1rem;

      p,
      span,
      h1,
      h2,
      small,
      strong {
        color: #fff;
      }
    `}

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 10px;
  }
`;
