export interface PizzaContextModel {
  data: {
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
          price: number;
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
  };
}
