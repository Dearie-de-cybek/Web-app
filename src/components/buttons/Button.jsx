import styled, { css } from "styled-components";

// This registers the different SIZES of buttons that might be available throughout the application
const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.6rem 1rem;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 600;
  `,
  large: css`
    font-size: 2rem;
    padding: 1.2rem 2.4rem;
    font-weight: 600;
  `,
  larger: css`
    font-size: 2.4rem;
    padding: 1.2rem 2.4rem;
    font-weight: 600;

    @media (max-width: 640px) {
      font-size: 1.8rem;
      padding: 1rem 1.8rem;
    }
  `,
};

// This registers the different VARIATIONS (i.e., outlook) of buttons that might be available throughout the application
const variations = {
  light: css`
    color: var(--color-white);
    background-color: transparent;
    border: 1px solid var(--color-white);

    &:hover {
      color: var(--color-off-white);
      border: 1px solid var(--color-off-white);
    }
  `,

  neutral: css`
    color: var(--color-ash-500);
    background-color: transparent;
    border: 1px solid var(--color-ash-300);

    &:hover {
      color: var(--color-ash-700);
      border: 1px solid var(--color-ash-500);
    }
  `,

  underline: css`
    color: var(--color-purple-200);
    background-color: transparent;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
      color: var(--color-purple-500);
    }
  `,

  primary: css`
    color: var(--color-white);
    background-color: var(--color-purple-200);

    &:hover {
      background-color: var(--color-purple-400);
    }
  `,

  outline: css`
    fill: var(--color-purple-200);
    color: var(--color-purple-200);
    background-color: var(--color-white);
    border-radius: var(--border-radius-tiny);

    &:hover {
      background-color: var(--color-white-200);
    }
  `,
};

// CREATE THE BUTTON COMPONENT
const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, background-color 0.2s ease;
  gap: 0.5rem;

  /* Access the styles included in the sizes and variation objects, depending on the passed in component props */
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

// set default props
Button.defaultProps = {
  size: "medium",
  variation: "primary",
};

export default Button;
