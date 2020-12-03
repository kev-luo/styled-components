import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "checkbox",
  name: props.name || "theme",
}))`
  width: 2rem;
  height: 1rem;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.5);
  transition: .5s;

  &:checked {
    background: #03a9f4;
  }

  &:before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    transition: 0.5s;
  }

  &:checked:before {
    left: 1rem;
  }
`;

export default Input;
