import React from "react";

import LeftTabs from "../components/Tabs/LeftTabs";
import RightTabs from "../components/Tabs/RightTabs";
import Map from "../components/Map/Map";

export default function Home() {
  return (
    <>
      <LeftTabs />
      <RightTabs />
      <Map />
    </>
  );
}
