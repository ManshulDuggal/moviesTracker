import React from "react";

import Home from "./pages/Home";

import Favourites from "./pages/favorites";
import Nav from "./components/navbar";
import GlobalStyle from "./components/GlobalStyles";
//router
import { Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <GlobalStyle />
        <Nav />
        <Route path="/" exact>
          <Home />
        </Route>

        <Route exact path={["/movie/:id", "/movie"]}>
          <Home />
        </Route>
        <Route exact path={["/favorites/:id", "/favorites"]} exact>
          <Favourites />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
