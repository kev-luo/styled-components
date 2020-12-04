import styled from "styled-components";
import { Link } from 'react-router-dom';

const FloatingLink = styled(Link)`
  cursor: pointer;
  background: #EBEDF2;
  color: #50BF6C;
  padding: 1.2rem;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px 5px -1px rgba(15, 38, 18, 0.75);
  transition: 200ms ease;

  :focus {
    outline: none;
  }

  &:hover {
    color: #50BF6C;
    box-shadow: 2px 4px 6px -1px rgba(80, 191, 108, 0.75);
    transform: scale(1.1);
    ${'' /* box-shadow: 5px 4px 10px 2px #26bf47; */}
  }

  & ~ span {
    visibility: hidden;
    margin-left: 1rem;
  }

  &:hover ~ span {
    color: var(--text-secondary);
    visibility: visible;
  }
`;

export default FloatingLink;
