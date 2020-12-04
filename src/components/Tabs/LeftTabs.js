import React from "react";
import styled from "styled-components";
import { GrUnorderedList } from "react-icons/gr";
import { RiRoadMapLine } from "react-icons/ri";
import TabContainer from "../Styled/TabContainer";
import FloatingBtn from "../Styled/FloatingBtn";

const LeftTabContainer = styled(TabContainer)`
  left: 1rem;
  ul {
    width: 4.7rem;
  }
`;

export default function LeftTabs() {
  return (
    <LeftTabContainer>
      <ul>
        <li>
          <FloatingBtn to="/map">
            <RiRoadMapLine size={20} />
          </FloatingBtn>
          <span>Map</span>
        </li>
        <li>
          <FloatingBtn to="/">
            <GrUnorderedList size={20} />
          </FloatingBtn>
          <span>Feed</span>
        </li>
      </ul>
    </LeftTabContainer>
  );
}
