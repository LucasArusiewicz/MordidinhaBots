import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #26262B;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    margin-right: 10px;
    border-radius: 20px;
    background: #55555a;
    width: 30px;
    height: 30px;
  }
`;
