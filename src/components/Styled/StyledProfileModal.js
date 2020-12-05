import styled from 'styled-components';

// delete border once done styling
// also finalize height and width

const StyledProfileModal = styled.div`
  background: #EBEDF2;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: 2.5fr 1fr .7fr;
  grid-template-areas:
  ".        img      img      ."
  ".        username username ."
  "supports supports posted   posted";
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
  .supports {
    grid-area: supports;
    align-self: end;
    justify-self: start;
  }
  .posted {
    grid-area: posted;
    align-self: end;
    justify-self: start;
  }

`

export default StyledProfileModal;