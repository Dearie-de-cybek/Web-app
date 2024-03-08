import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid var(--color-ash-300);
  border-radius: var(--border-radius-md);
  padding: ${({ pad }) => (pad ? pad : "1.2rem 2.4rem")};
  height: ${({ height }) => (height ? `${height}rem` : "10rem")};
`;

export default TextArea;
