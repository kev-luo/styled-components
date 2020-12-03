import React from "react";
import { GrUnorderedList } from "react-icons/gr";
import { RiRoadMapLine } from "react-icons/ri";
import "./StyledTab.css";
import FloatingBtn from "../StyledButton/FloatingBtn";
import { useDarkModeContext } from "../../utils/DarkContext";

export default function StyledTab() {
  const { dispatch } = useDarkModeContext();
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <FloatingBtn
            className="nav-btn"
            onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}
          >
            <GrUnorderedList />
          </FloatingBtn>
          <span className="item-description">Feed</span>
        </li>
        <li className="nav-item">
          <FloatingBtn
            className="nav-btn"
            onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}
          >
            <RiRoadMapLine />
          </FloatingBtn>
          <span className="item-description">Map</span>
        </li>
      </ul>
    </nav>
  );
}
