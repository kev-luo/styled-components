import styled from "styled-components";

const StyledPing = styled.div`
  width: 75%;
  border: 1px solid #cfcfcf;
  padding: 1rem 0rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
  grid-template-rows: 1fr 2fr 1fr;
  .img {
    grid-area: 1 / 1 / 3 / 1;
    justify-self: center;
    width: 3.5rem;
    height: 3.5rem;
  }
  .username {
    grid-area: 1 / 2 / 2 / auto;
  }
  .meta {
    font-weight: normal;
  }
  .sxy_line {
    grid-column: 1 / 5;
    grid-row: 4 / 4;
    height: 1px;
    background: linear-gradient(to right, #f2f2f2, black, #f2f2f2);
  }
`;

export default StyledPing;
