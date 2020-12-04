import React from "react";
import { Avatar } from "@material-ui/core";
import { HiOutlineUser } from "react-icons/hi";
import StyledDiv from "../Styled/StyledDiv";
import StyledPing from "../Styled/StyledPing";

export default function Feed() {
  return (
    <StyledDiv>
      <div>Feed</div>

      <StyledPing className="ping">
        <Avatar className="img">
          <HiOutlineUser size={20} />
        </Avatar>
        <h4 className="username">
          @Username<span className="meta"> · 2 hours ago</span>
        </h4>
        <div className="sxy_line"></div>
      </StyledPing>
    </StyledDiv>
  );
}
