import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileBtn = styled(Link)`
  font-weight: bold;
  font-size: 1rem;
  border: 4px solid;
  border-image-slice: 1;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
  height: 100%;
  span {
    background: linear-gradient(45deg, #22ccf2, #052159);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:after {
    content: "";
  }
  &:hover {
    cursor: pointer;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const PostedBtn = styled(ProfileBtn)`
  border-image-source: linear-gradient(45deg, #22ccf2, #052159);
  span {
    background: linear-gradient(45deg, #22ccf2, #052159);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:after {
    background: -webkit-linear-gradient(45deg, #22ccf2, #052159);
  }
  &:hover {
    background: linear-gradient(45deg, #22ccf2, #052159);
    span {
      background: #EBEDF2;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const SupportsBtn = styled(ProfileBtn)`
  border-image-source: linear-gradient(45deg, #50bf6c, #1a4024);
  span {
    background: linear-gradient(45deg, #50bf6c, #1a4024);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:after {
    background: -webkit-linear-gradient(45deg, #50bf6c, #1a4024);
  }
  &:hover {
    background: linear-gradient(45deg, #50bf6c, #1a4024);
    span {
      background: #EBEDF2;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export { PostedBtn, SupportsBtn };
