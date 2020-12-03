import React from "react";

import { useDarkModeContext } from "../../utils/DarkContext";
import StyledTab from "../StyledTab/StyledTab";
import StyledButton from "../StyledButton/StyledButton";
import Map from "../Map/Map";

export default function Home() {
  const {
    state: { darkmode },
    dispatch,
  } = useDarkModeContext();
  return (
    <div>
      <StyledButton onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}>
        {darkmode ? "Light" : "Dark"}
      </StyledButton>
      <StyledTab />
      <Map />
    </div>
  );
}
