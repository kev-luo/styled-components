import styled from "styled-components";
import { Link } from 'react-router-dom';

const FloatingLink = styled(Link)`
  cursor: pointer;
  background: grey;
  color: white;
  padding: 1.1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 2px 4px 5px -1px rgba(0, 0, 0, 0.75);
  transition: 300ms ease;

  :focus {
    outline: none;
  }

  :hover {
    background: lightblue;
    color: blue;
    box-shadow: 2px 4px 5px 1px rgba(0, 0, 0, 0.75);
  }

  & ~ span {
    visibility: hidden;
    margin-left: 1rem;
  }

  :hover ~ span {
    color: var(--text-secondary);
    visibility: visible;
  }
`;

export default FloatingLink;
