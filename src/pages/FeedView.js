import React from "react";

import LeftTabs from "../components/Tabs/LeftTabs";
import RightTabs from "../components/Tabs/RightTabs";
import Feed from "../components/Feed/Feed";

export default function FeedView() {
  return (
    <div style={{backgroundAttachment: "fixed", minHeight: "100vh", display: "flex"}}>
      <LeftTabs />
      <RightTabs />
      <Feed />
    </div>
  );
}
