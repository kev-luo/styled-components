import React from "react";
import styled from "styled-components";
import { HiOutlineUser, HiOutlinePlus } from "react-icons/hi";
import TabContainer from "../Styled/TabContainer";
import FloatingBtn from "../Styled/FloatingBtn";
import { useDarkModeContext } from "../../utils/DarkContext";

const RightTabContainer = styled(TabContainer)`
  right: 1rem;
  li {
    flex-direction: row-reverse;
  }
`;

const RightFloatingBtn = styled(FloatingBtn)`
  & ~ span {
    margin-right: 1rem;
  }
`;

export default function LeftTabs() {
  const { dispatch } = useDarkModeContext();
  return (
    <RightTabContainer>
      <ul>
        <li>
          <RightFloatingBtn
            onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}
          >
            <HiOutlinePlus size={20} />
          </RightFloatingBtn>
          <span className="description">New Ping</span>
        </li>
        <li>
          <RightFloatingBtn
            onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}
          >
            <HiOutlineUser size={20} />
          </RightFloatingBtn>
          <span className="description">Profile</span>
        </li>
      </ul>
    </RightTabContainer>
  );
}
