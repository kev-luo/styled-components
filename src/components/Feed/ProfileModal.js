import React from "react";
import { Avatar } from "@material-ui/core";
import { HiOutlineUser } from "react-icons/hi";

import StyledProfileModal from "../Styled/StyledProfileModal";
import { SupportsBtn, PostedBtn } from "../Styled/ProfileBtn";

export default function ProfileModal() {
  return (
    <StyledProfileModal>
      <Avatar className="img">
        <HiOutlineUser size={60} />
      </Avatar>
      <h3 className="username">@username</h3>
      <SupportsBtn className="supports">
        <span>Supports</span>
      </SupportsBtn>
      <PostedBtn className="posted">
        <span>Posted</span>
      </PostedBtn>
    </StyledProfileModal>
  );
}
