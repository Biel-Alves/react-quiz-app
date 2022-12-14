import styled, { createGlobalStyle } from "styled-components";
import bgImage from "./images/nature.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body {
        background-image: url(${bgImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Signika', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
  .score {
    font-family: "Aclonica", sans-serif;
    color: #fff;
    font-size: 2.5rem;
    margin: 0;
  }

  h1 {
    font-family: "Lily Script One", cursive;
    background-image: linear-gradient(180deg, #fff, #f90);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 5rem;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #f90);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 1.3rem;
  }

  .start {
    max-width: 200px;
  }
`;
