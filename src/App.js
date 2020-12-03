import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MapView from "./pages/MapView";
import FeedView from "./pages/FeedView";
import Nav from "./components/Nav/Nav";
import { DarkModeProvider } from "./utils/DarkContext";

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={FeedView} />
          <Route exact path="/map" component={MapView} />
        </Switch>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
