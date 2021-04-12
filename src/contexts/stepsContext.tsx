import { createContext, useState } from "react";
import { PizzaContextModel } from "services/model";
import { ORDER_STEPS } from "utils/constants";

interface StepsContextData {
  changeStep: (step: number) => void;
  setPizzaContext: (stoomPizzaData: StepsContextProps) => void;
  setChoosedFlavor: (pizza: PizzaFlavorChoosed) => void;
  setChoosedDough: (dough: PizzaDoughChoosed) => void;
  setChoosedSize: (size: PizzaSizeChoosed) => void;
  setPromoOrder: (isPromo: boolean) => void;
  currentStep: number;
  pizzaData: StepsContextProps;
  loading: boolean;
  flavor: PizzaFlavorChoosed;
  dough: PizzaDoughChoosed;
  size: PizzaSizeChoosed;
  isPromoOrder: boolean;
}

interface StepsContextProps {
  promoDay: {
    id: number;
    pizzaName: string;
    price: number;
    doughId: number;
    points: number;
    sizeId: number;
    picture: string;
  };
  menu: {
    pizzaList: [
      {
        id: number;
        name: string;
        ingredients: string;
        picture: string;
      }
    ];
  };
  doughTypes: [
    {
      id: number;
      name: string;
      description: string;
    }
  ];
  sizes: [
    {
      id: number;
      name: string;
      price: number;
    }
  ];
}

interface PizzaFlavorChoosed {
  id: number;
  name: string;
  ingredients: string;
  picture: string;
}

interface PizzaDoughChoosed {
  id: number;
  name: string;
  description: string;
}

interface PizzaSizeChoosed {
  id: number;
  name: string;
  price: number;
}

export const StepsContext = createContext<StepsContextData>(
  {} as StepsContextData
);

const initialContextState: StepsContextProps = {
  promoDay: {
    id: 0,
    pizzaName: "",
    price: 0,
    doughId: 0,
    points: 0,
    sizeId: 0,
    picture: "",
  },
  menu: {
    pizzaList: [
      {
        id: 0,
        name: "",
        ingredients: "",
        picture: "",
      },
    ],
  },
  doughTypes: [
    {
      id: 0,
      name: "",
      description: "",
    },
  ],
  sizes: [{ id: 0, name: "", price: 0 }],
};

export const StepsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(ORDER_STEPS.STEP1);
  const [pizzaData, setPizzaData] = useState<StepsContextProps>(
    initialContextState
  );
  const [loading, setLoading] = useState(true);

  const [flavor, setFlavor] = useState<PizzaFlavorChoosed>();
  const [dough, setDough] = useState<PizzaDoughChoosed>();
  const [size, setSize] = useState<PizzaSizeChoosed>();

  const [isPromoOrder, setIsPromoOrder] = useState(false);

  const changeStep = (step: number) => {
    setCurrentStep(step);
  };

  const setPizzaContext = (stoomPizzaData: StepsContextProps) => {
    setPizzaData(stoomPizzaData);
    setLoading(false);
  };

  const setChoosedFlavor = (pizza: PizzaFlavorChoosed) => {
    setFlavor(pizza);
  };

  const setChoosedDough = (dough: PizzaDoughChoosed) => {
    setDough(dough);
  };

  const setChoosedSize = (size: PizzaSizeChoosed) => {
    setSize(size);
  };

  const setPromoOrder = (isPromo: boolean) => {
    setIsPromoOrder(isPromo);
  };

  return (
    <StepsContext.Provider
      value={{
        currentStep,
        pizzaData,
        loading,
        flavor,
        dough,
        size,
        isPromoOrder,
        setPizzaContext,
        changeStep,
        setChoosedFlavor,
        setChoosedDough,
        setChoosedSize,
        setPromoOrder,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};
