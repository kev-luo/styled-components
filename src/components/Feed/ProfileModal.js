import React from 'react'
import { Avatar } from "@material-ui/core";
import { HiOutlineUser } from "react-icons/hi";

import StyledProfileModal from "../Styled/StyledProfileModal";

export default function ProfileModal() {
  return (
    <StyledProfileModal>
      <Avatar className="img">
        <HiOutlineUser size={60}/>
      </Avatar>
      <h3 className="username">@username</h3>
      <button className="posted">Posted</button>
      <button className="supports">Supports</button>
    </StyledProfileModal>
  )
}
