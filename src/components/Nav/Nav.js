import React from 'react'

import StyledNav from '../Styled/StyledNav'
import ToggleBtn from '../Styled/ToggleBtn';
import { useDarkModeContext } from '../../utils/DarkContext';

export default function Nav() {
  const {state: {darkmode}, dispatch} = useDarkModeContext();

  return (
    <StyledNav>
      <div className="logo">
        <a href="#">Ping</a>
      </div>
      <div>
        <span>{darkmode ? "☀️" : "🌙"}</span>
        <ToggleBtn onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}/>
        <a href="#">About</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </div>
    </StyledNav>
  )
}
