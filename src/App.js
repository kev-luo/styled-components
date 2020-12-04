import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useTransition, animated } from "react-spring";

import MapView from "./pages/MapView";
import FeedView from "./pages/FeedView";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Nav from "./components/Nav/Nav";
import { DarkModeProvider } from "./utils/DarkContext";

function App() {
  const location = useLocation();
  const transition = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' }, 
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' }, 
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' }, 
  });
  

  return (
    <DarkModeProvider>
      <Nav />
      {transition.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={FeedView} />
            <Route exact path="/map" component={MapView} />
            <Route exact path="/about" component={About} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </animated.div>
      ))}
    </DarkModeProvider>
  );
}

export default App;
