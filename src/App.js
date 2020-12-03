import React from "react";

import Home from "./components/Home/Home";
import { DarkModeProvider } from "./utils/DarkContext";

function App() {
  return (
    <DarkModeProvider>
      <Home />
    </DarkModeProvider>
  );
}

export default App;
