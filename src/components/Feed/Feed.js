import React from "react";

import StyledDiv from "../Styled/StyledDiv";
import LeftTabs from "../Tabs/LeftTabs";
import RightTabs from "../Tabs/RightTabs";
import Ping from "./Ping";
import ProfileModal from "./ProfileModal";

export default function Feed() {
  return (
    <StyledDiv>
      <div>Feed</div>
      <LeftTabs/>
      <RightTabs />
      <ProfileModal />
      <Ping />
      <Ping />
      <Ping />
      <Ping />
      <Ping />
      <Ping />
      <Ping />
      <Ping />
      <Ping />
      <Ping />
    </StyledDiv>
  );
}
