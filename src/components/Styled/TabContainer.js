import styled from "styled-components";

const TabContainer = styled.div`
  top: 5%;
  position: absolute;
  height: 100%;
  z-index: 15;

  ul {
    position: sticky;
    top: 8.2%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    flex-direction: row;
    align-items: center;
    margin-left: 1rem;
    margin-top: 2rem;
  }
`;

export default TabContainer;
