import React, { useContext, useReducer } from "react";

const DarkModeContext = React.createContext();

const initialState = { darkmode: false };

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DARKMODE":
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    default:
      return state;
  }
}

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkModeContext = () => {
  return useContext(DarkModeContext);
};

export { DarkModeProvider, useDarkModeContext };
