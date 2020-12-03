import React from 'react'

import StyledNav from '../Styled/StyledNav'
import ToggleBtn from '../Styled/ToggleBtn';

export default function Nav() {
  return (
    <StyledNav>
      <div className="logo">
        <a href="#">Ping</a>
      </div>
      <div>
        <ToggleBtn />
        <a href="#">About</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </div>
    </StyledNav>
  )
}
