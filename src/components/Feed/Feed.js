import React, { useState } from "react";

import StyledDiv from "../Styled/StyledDiv";
import LeftTabs from "../Tabs/LeftTabs";
import RightTabs from "../Tabs/RightTabs";
import Ping from "./Ping";
import ProfileModal from "./ProfileModal";

export default function Feed() {
  const [open, setOpen] = useState(false);

  return (
    <StyledDiv>
      <div>Feed</div>
      <LeftTabs />
      <RightTabs />
      <ProfileModal open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
      <Ping open={open} setOpen={setOpen} />
    </StyledDiv>
  );
}
