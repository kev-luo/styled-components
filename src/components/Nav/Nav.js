import React from 'react'

import StyledNav from '../Styled/StyledNav'

export default function Nav() {
  return (
    <StyledNav>
      <div className="logo">
        <a href="#">Ping</a>
      </div>
      <div>
        <a href="#">About</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </div>
    </StyledNav>
  )
}
