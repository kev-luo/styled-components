import React from "react";

import LeftTabs from "../components/Tabs/LeftTabs";
import RightTabs from "../components/Tabs/RightTabs";
import Feed from "../components/Feed/Feed";
import AbsoluteWrapper from "../components/Styled/AbsoluteWrapper";

export default function FeedView() {
  return (
    <>
      <LeftTabs />
      <RightTabs />
      <AbsoluteWrapper>
        <Feed />
      </AbsoluteWrapper>
    </>
  );
}
