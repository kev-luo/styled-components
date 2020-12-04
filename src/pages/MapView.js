import React from "react";

import LeftTabs from "../components/Tabs/LeftTabs";
import RightTabs from "../components/Tabs/RightTabs";
import Map from "../components/Map/Map";
import AbsoluteWrapper from '../components/Styled/AbsoluteWrapper';

export default function MapView() {
  return (
    <AbsoluteWrapper>
      <LeftTabs />
      <RightTabs />
      <Map />
    </AbsoluteWrapper>
  );
}
