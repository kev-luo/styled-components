import styled from 'styled-components';

// delete border and background color once done styling
// also finalize height and width

const StyledProfileModal = styled.div`
  border: 1px solid grey;
  background: grey;
  position: fixed;
  border-radius: 3px;
  z-index: 1;
  display: grid;
  width: 15.5rem;
  height: 18rem;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: 2.5fr 1fr 1fr;
  grid-template-areas:
  ". img      img      ."
  ". username username ."
  ". posted   supports .";
  .img {
    grid-area: img;
    align-self: end;
    justify-self: center;
    width: 7.5rem;
    height: 7.5rem;
  }
  .username {
    grid-area: username;
    align-self: start;
    justify-self: center;
  }
  .posted {
    grid-area: posted;
    align-self: start;
    justify-self: center;
  }
  .supports {
    grid-area: supports;
    align-self: start;
    justify-self: center;
  }

`

export default StyledProfileModal;