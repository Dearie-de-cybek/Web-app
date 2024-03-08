import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-ash-300);
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
  padding: 1.2rem 2.4rem;
  width: 100%;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 640px) {
    padding: 1rem 1.6rem;
  }
`;

export default Input;
