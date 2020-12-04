import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">Ping</Link>
      </div>
      <div className="nav">
        <span>{darkmode ? "☀️" : "🌙"}</span>
        <ToggleBtn onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })} />
        <Link to="/about">About</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/">Logout</Link>
      </div>
    </StyledNav>
  );
}
