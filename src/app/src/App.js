import React from "react";

import GlobalStyle, { HeaderTitle } from "./styles/global";
import logo from './img/ms-icon-150x150.png';
import Header from "./components/Header";
import Status from "./components/Status";

function App() {
  return (
    <>
      <Header
        left={(
          <HeaderTitle>
            <img src={logo}></img>
            <h1> Mordidinha</h1>
          </HeaderTitle>
        )}
        right={<Status/>}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
