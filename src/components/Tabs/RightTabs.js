import React from "react";
import styled from "styled-components";
import { GrUnorderedList } from "react-icons/gr";
import { RiRoadMapLine } from "react-icons/ri";
import TabContainer from "../Styled/TabContainer";
import FloatingBtn from "../Styled/FloatingBtn";
import { useDarkModeContext } from "../../utils/DarkContext";

const RightTabContainer = styled(TabContainer)`
  right: 8rem;
  li {
    flex-direction: row-reverse;
  }
`;

const RightFloatingBtn = styled(FloatingBtn)`
  & ~ span {
    margin-right: 1rem;
  }
`

export default function LeftTabs() {
  const { dispatch } = useDarkModeContext();
  return (
    <RightTabContainer>
      <ul>
        <li>
          <RightFloatingBtn onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}>
            <GrUnorderedList size={20} />
          </RightFloatingBtn>
          <span className="description">Feed</span>
        </li>
        <li>
          <RightFloatingBtn onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}>
            <RiRoadMapLine size={20} />
          </RightFloatingBtn>
          <span className="description">Map</span>
        </li>
      </ul>
    </RightTabContainer>
  );
}
