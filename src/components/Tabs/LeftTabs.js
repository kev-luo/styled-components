import React from "react";
import { GrUnorderedList } from "react-icons/gr";
import { RiRoadMapLine } from "react-icons/ri";
import TabContainer from "../Styled/TabContainer";
import FloatingBtn from "../Styled/FloatingBtn";

export default function LeftTabs() {
  return (
    <TabContainer>
      <ul>
        <li>
          <FloatingBtn to="/">
            <GrUnorderedList size={20} />
          </FloatingBtn>
          <span>Feed</span>
        </li>
        <li>
          <FloatingBtn to="/map">
            <RiRoadMapLine size={20} />
          </FloatingBtn>
          <span>Map</span>
        </li>
      </ul>
    </TabContainer>
  );
}
