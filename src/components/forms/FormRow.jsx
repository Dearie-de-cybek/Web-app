import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 0.5rem;

  @media (max-width: 640px) {
    margin-bottom: 1rem;
    gap: 0.5rem;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:has(button) {
    margin-top: 1rem;
  }

  &:has(svg) {
    color: var(--color-ash-300);
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  justify-self: flex-end;

  @media (max-width: 640px) {
    font-size: 1rem 1.2rem;
  }
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      <Label htmlFor={children?.props?.id}>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
