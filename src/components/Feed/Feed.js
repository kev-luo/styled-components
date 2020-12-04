import React from "react";
import StyledDiv from "../Styled/StyledDiv";
import StyledPing from "../Styled/StyledPing";

export default function Feed() {
  return (
    <StyledDiv>
      <div>Feed</div>
      <StyledPing>
        Hello
        <div className="sxy_line"></div>
      </StyledPing>
    </StyledDiv>
  );
}
