import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  padding: 1rem;
  padding-top: 7rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    transparent 0%,
    currentColor 0%,
    currentColor 85%,
    transparent 95%
  );
  background-clip: content-box;
  -webkit-background-clip: text;
  background-attachment: fixed;
  .ping {
    color: transparent;
  }
`;

export default StyledDiv;
