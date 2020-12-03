import React from "react";

import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import { DarkModeProvider } from "./utils/DarkContext";

function App() {
  return (
    <DarkModeProvider>
      <Nav />
      <Home />
    </DarkModeProvider>
  );
}

export default App;
