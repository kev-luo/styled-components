import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 4rem;
  background: #262626;
  position: fixed;
  width: 100%;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    margin: 2rem;
  }
  & a {
    margin: 1rem;
    text-decoration: none;
    color: var(--text-primary);
    &:hover {
      text-decoration: underline;
    }
  }

  .logo {
    font-size: 30px;
  }
`

export default StyledNav;