import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileBtn = styled(Link)`
  background: none;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-shadow: 2px 4px 5px -1px rgba(15, 38, 18, 0.75);
  transition: 200ms ease;
  span {
    transition: border 100ms ease;
    border: 4px solid;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
  &:hover {
    cursor: pointer;
    color: white;
    box-shadow: 2px 5px 5px 2px rgba(15, 38, 18, 0.75);
  }
  &:focus {
    outline: none;
  }
`;
const SupportsBtn = styled(ProfileBtn)`
  span {
    border-image-slice: 1;
    border-image-source: linear-gradient(45deg, #50bf6c, #1a4024);
    background: linear-gradient(45deg, #50bf6c, #1a4024);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const PostedBtn = styled(ProfileBtn)`
  span {
    border-image-slice: 1;
    border-image-source: linear-gradient(135deg, #22ccf2, #052159);
    background: linear-gradient(135deg, #22ccf2, #052159);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export { SupportsBtn, PostedBtn };
