import React from "react";

import LeftTabs from "../Tabs/LeftTabs";
import RightTabs from "../Tabs/RightTabs";
import StyledDiv from "../Styled/StyledDiv";
import Map from "../Map/Map";

export default function Home() {
  return (
    <StyledDiv>
      <LeftTabs />
      <RightTabs />
      <Map />
    </StyledDiv>
  );
}
