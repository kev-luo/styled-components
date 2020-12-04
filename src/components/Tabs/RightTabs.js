import React from "react";
import styled from "styled-components";
import { HiOutlineUser, HiOutlinePlus } from "react-icons/hi";
import TabContainer from "../Styled/TabContainer";
import FloatingBtn from "../Styled/FloatingBtn";
import { useDarkModeContext } from "../../utils/DarkContext";

const RightTabContainer = styled(TabContainer)`
  right: 1rem;
  ul {
    width: 4rem;
  }
  li {
    flex-direction: row-reverse;
  }
`;

const RightFloatingBtn = styled(FloatingBtn)`
  & ~ span {
    margin-left: 0;
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
            as="button"
            onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}
          >
            <HiOutlinePlus size={20} />
          </RightFloatingBtn>
          <span className="description">Ping</span>
        </li>
        <li>
          <RightFloatingBtn
            as="button"
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
