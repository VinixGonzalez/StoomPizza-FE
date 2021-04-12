import Head from "next/head";
import { PizzaContextModel } from "services/model";
import React, { useContext, useEffect } from "react";
import { MainContainer, Content, ContentContainer, Footer } from "styles/home";
import { Header, UserInfo, OrderSteps, Promo, OrderDetails } from "components";
import { API } from "../services/api";
import { GetStaticProps } from "next";
import { StepsContext } from "contexts/stepsContext";

interface HomeProps {
  stoomPizzaData: {
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

const Home: React.FC<HomeProps> = ({ stoomPizzaData }) => {
  const { setPizzaContext } = useContext(StepsContext);

  useEffect(() => {
    setPizzaContext(stoomPizzaData);
  });

  return (
    <>
      <Head>
        <title>Stoom | Pizza</title>
      </Head>
      <MainContainer>
        <Content>
          <ContentContainer>
            <UserInfo />
            <Promo />
          </ContentContainer>
          <ContentContainer>
            <OrderSteps />
          </ContentContainer>
          <ContentContainer>
            <OrderDetails />
          </ContentContainer>
        </Content>
      </MainContainer>
      <Footer>StoomPizza 2021</Footer>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await API.get("/pizza/restaurantData");

  if (response.status !== 200) {
    return null;
  }

  const stoomPizzaData: PizzaContextModel = response.data;

  return {
    props: {
      stoomPizzaData,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
