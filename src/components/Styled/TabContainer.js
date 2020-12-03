import styled from "styled-components";

const TabContainer = styled.div`
  margin: 4rem 1rem;
  position: fixed;
  height: 80%;
  z-index: 1;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
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