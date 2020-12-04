import styled from "styled-components";

const TabContainer = styled.div`
  margin: 5rem 2.2rem;
  position: fixed;
  height: 100%;
  top: 10%;
  z-index: 15;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1rem;
    margin-top: 2rem;
  }
`;

export default TabContainer;