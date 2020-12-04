import React from 'react'
import { Avatar } from "@material-ui/core";
import { HiOutlineUser } from "react-icons/hi";

import StyledProfileModal from "../Styled/StyledProfileModal";
import ProfileBtn from "../Styled/ProfileBtn";

export default function ProfileModal() {
  return (
    <StyledProfileModal>
      <Avatar className="img">
        <HiOutlineUser size={60}/>
      </Avatar>
      <h3 className="username">@username</h3>
      <ProfileBtn className="posted">Posted</ProfileBtn>
      <ProfileBtn className="supports">Supports</ProfileBtn>
    </StyledProfileModal>
  )
}
