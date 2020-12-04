import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  top: 5rem;
  margin: 0 auto;
  ${"" /* border: 1px solid #ccc; */}
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 15px;
     height: 15px;
     border:1px solid purple;
  }
`;

export default StyledDiv;
