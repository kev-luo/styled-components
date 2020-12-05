import React from "react";
import { Avatar, DialogContent, Dialog } from "@material-ui/core";
import { HiOutlineUser } from "react-icons/hi";

import StyledProfileModal from "../Styled/StyledProfileModal";
import { SupportsBtn, PostedBtn } from "../Styled/ProfileBtn";

export default function ProfileModal({ open, setOpen }) {

  return (
    <Dialog open={open} onClose={() => setOpen(!open)}>
      <DialogContent style={{ padding: 0, width: "20rem", height: "15rem" }}>
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
      </DialogContent>
    </Dialog>
  );
}
