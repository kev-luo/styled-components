import React from "react";
import { NavLink } from "react-router-dom";

import StyledNav from "../Styled/StyledNav";
import ToggleBtn from "../Styled/ToggleBtn";
import { useDarkModeContext } from "../../utils/DarkContext";

export default function Nav() {
  const {
    state: { darkmode },
    dispatch,
  } = useDarkModeContext();

  return (
    <StyledNav>
      <div className="logo">
      <NavLink exact to="/" activeStyle={logoActive}>Ping</NavLink>
      </div>
      <div className="nav">
        <span>{darkmode ? "☀️" : "🌙"}</span>
        <ToggleBtn onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })} />
        <NavLink exact to="/about" activeStyle={active}>About</NavLink>
        <NavLink exact to="/settings" activeStyle={active}>Settings</NavLink>
      </div>
    </StyledNav>
  );
}

const active = {
  color: "#5BA66E",
  textDecoration: "underline"
}

const logoActive = {
  color: "#5BA66E",
}