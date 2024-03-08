import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      /* Box */
      border-radius: var(--border-radius-md);
    `}

  /* ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    overflow: hidden;
     */
  font-size: 1.8rem;

  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
