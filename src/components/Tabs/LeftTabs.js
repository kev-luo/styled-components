import React from "react";
import { GrUnorderedList } from "react-icons/gr";
import { RiRoadMapLine } from "react-icons/ri";
import TabContainer from "../Styled/TabContainer";
import FloatingBtn from "../Styled/FloatingBtn";
import { useDarkModeContext } from "../../utils/DarkContext";

export default function LeftTabs() {
  const { dispatch } = useDarkModeContext();
  return (
    <TabContainer>
      <ul>
        <li>
          <FloatingBtn onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}>
            <GrUnorderedList size={20} />
          </FloatingBtn>
          <span>Feed</span>
        </li>
        <li>
          <FloatingBtn onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}>
            <RiRoadMapLine size={20} />
          </FloatingBtn>
          <span>Map</span>
        </li>
      </ul>
    </TabContainer>
  );
}
