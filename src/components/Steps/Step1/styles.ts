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

interface PizzaFlavorProps {
  flavorChoosed?: boolean;
}

export const PizzaFlavor = styled.div<PizzaFlavorProps>`
  ${(props) =>
    props.flavorChoosed &&
    css`
      background: var(--red-primary);
      border-radius: 1rem;
      padding: 0.5rem;

      p,
      span,
      h1,
      h2,
      small,
      strong {
        color: #fff;
      }
    `}
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 25px;
  grid-template-areas: ". .";

  img {
    height: 160px;
    border-radius: 1rem;
    border: 2px solid var(--red-primary);
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 10px;

    img {
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.9fr 1.1fr;
    gap: 0px 0px;
    grid-template-areas:
      "."
      ".";

    & > div {
      width: 100%;
      justify-content: space-evenly;
    }
  }
`;
