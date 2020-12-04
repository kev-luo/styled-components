import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MapView from "./pages/MapView";
import FeedView from "./pages/FeedView";
import About from './pages/About';
import Settings from './pages/Settings';
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
          <Route exact path="/about" component={About} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
