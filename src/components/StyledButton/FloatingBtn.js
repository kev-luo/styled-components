import styled from 'styled-components';

const FloatingBtn = styled.a.attrs(() => ({ tabIndex: 0}))`
  cursor: pointer;
  background: grey;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }

  :hover {
    background: lightblue;
    color: blue;
  }
  
  :hover + .item-description {
    color: var(--text-secondary);
    display: block;
  }
`

export default FloatingBtn;
