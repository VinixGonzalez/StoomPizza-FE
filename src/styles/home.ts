import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 2rem;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }

  @media (max-width: 1080px) {
    max-width: 800px;
  }
`;

export const Content = styled.div`
  margin-top: -6rem;
  width: 100%;

  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr;
  gap: 0px 25px;
  grid-template-areas: ". . .";

  @media (max-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px 0px;
    grid-template-areas:
      "."
      "."
      ".";
  }
`;

interface GlobalFlexContainerProps {
  direction?: "row" | "column";
  align?: "flex-start" | "center" | "flex-end";
  justify?:
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "center"
    | "end"
    | "start";
  gap?: number;
  padding?: "global" | string;
}

export const GlobalFlexContainer = styled.div<GlobalFlexContainerProps>`
  display: flex;
  padding: ${(props) =>
    props.padding === "global" ? "1rem" : `${props.padding}px`};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  justify-content: ${(props) => (props.justify ? props.justify : "start")};
  gap: ${(props) => props.gap && `${props.gap}px`};
`;

interface ContentContainerProps {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  width?: number;
  height?: number;
  gap?: number;
}

export const ContentContainer = styled.div<ContentContainerProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : 0)};
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : 0)};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : 0)};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : 0)};
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "25px")};
`;

export const Footer = styled.footer`
  text-align: center;
  font-family: "Maven Pro";
  font-size: 1.2rem;
`;
